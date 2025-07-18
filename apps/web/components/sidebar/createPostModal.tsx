"use client"
import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons/icons";
import { Input } from "@repo/ui/input";
import { Modal } from "@repo/ui/modal";
import React, { useRef, useState } from "react";
import { createPost } from "../../lib/actions/createPost";
import { useRouter } from "next/navigation";
export function CreatePostModal({ onClose }: { onClose: () => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false)
    const [imgUrl, setImageUrl] = useState("")
    const [image, setImage] = useState<File>()
    const titleRef = useRef<HTMLInputElement>(null)
    const captionRef = useRef<HTMLTextAreaElement>(null)
    const router = useRouter()

    function handleClick() {
        if (!imgUrl) inputRef.current?.click()
    }

    function getFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return
        setImageUrl(URL.createObjectURL(file))
        setImage(file)
    }
    async function post(e: React.MouseEvent) {
        e.preventDefault()
        if (!imgUrl) return
        if (!image || !titleRef.current || !captionRef.current) return
        setLoading(true)
        const res = await createPost(image, titleRef.current.value, captionRef.current.value)
        if (res.status === "success") {
            alert("posted")
            router.refresh();
            onClose()
        }
        else {

            alert("failed to post")
        }
        setLoading(false)
        if (inputRef.current) inputRef.current.value = ""
        if (captionRef.current) captionRef.current.value = ""
        if (titleRef.current) titleRef.current.value = ""
        setImageUrl("")

    }

    return <Modal backgroundSlye=" backdrop-blur-xs z-20" position='middle'
        modalStyle="w-110 h-140 flex flex-col gap-4 p-6 bg-dark relative rounded text-white ">
        {loading && <div className=" w-full h-full absolute top-0 right-0 bg-black opacity-70">
            loading....
        </div>}

        <div onClick={onClose} className="cursor-pointer  absolute top-2 right-2">
            <Icons size="lg" name='circleCrossIcon' />
        </div>

        <div className="text-center mt-3 text-xl font-medium">What's in your mind ?</div>

        <Input reference={titleRef} placeholder="Title" customStyle="rounded border outline-none border-deepGray p-2 " />

        <textarea ref={captionRef} className="border rounded resize-none scrollbar-none p-2 border-deepGray bg-dark outline-none " placeholder="Caption"></textarea>

        <div className="w-full rounded-md flex justify-center items-center h-64 border border-deepGray bg-black  " onClick={handleClick}>

            <div className="flex justify-center w-full h-full items-center relative gap-1 ">
                {imgUrl && <div onClick={() => {
                    setImageUrl("")

                }} className="  text-liteGray cursor-pointer  absolute top-0 right-0 ">
                    <Icons size="md" name="crossIcon" />
                </div>}
                {imgUrl ?
                    <img className=" w-full  h-full object-contain" src={imgUrl} />
                    :
                    <div className="flex flex-col cursor-pointer  gap-2 items-center text-liteGray ">

                        <Icons size="lg" name="imageIcon" />
                        Upload image
                    </div>
                }
            </div>

            <Input type="file" customStyle=" hidden" placeholder="" reference={inputRef} onChange={getFile} />
        </div>

        <div className="flex justify-center items-center">
            <Button onClick={post} varient="primary"> <div className="flex gap-2"> <Icons size="md" name='postIcon' />Post</div></Button>
        </div>






    </Modal>
}


