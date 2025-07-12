"use client"
import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons/icons";
import { Input } from "@repo/ui/input";
import { Modal } from "@repo/ui/modal";
import React, { useRef, useState } from "react";
import { uploadFile } from "../../app/utils/uploadFiles";


export function CreatePostModal({ onClose }: { onClose: () => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false)
    const [imgUrl, setImageUrl] = useState("")

    function handleClick() {
        if (!imgUrl) inputRef.current?.click()
    }

    function getFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return
        setImageUrl(URL.createObjectURL(file))
        return file

    }
    async function createPost(image: File) {
        setLoading(true)
        const form = new FormData()
        form.append("file", image)
        const res = await uploadFile(form)
        setLoading(false)
    }

    return <Modal backgroundSlye=" backdrop-blur-xs z-20" position='middle'
        modalStyle="w-110 h-150 flex flex-col gap-4 p-6 bg-dark relative rounded text-white ">

        <div onClick={onClose} className="cursor-pointer  absolute top-2 right-2">
            <Icons size="lg" name='circleCrossIcon' />
        </div>

        <div className="text-center my-3 text-xl font-medium">What's in your mind ?</div>

        <Input placeholder="Title" customStyle="rounded border outline-none border-deepGray p-2 " />

        <textarea className="border rounded resize-none scrollbar-none p-2 border-deepGray bg-dark outline-none " placeholder="Caption"></textarea>

        <div className="w-full rounded-md flex justify-center items-center h-64 border border-liteGray bg-black  " onClick={handleClick}>

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
            <Button varient="primary"> <div className="flex gap-2"> <Icons size="md" name='postIcon' />Post</div></Button>
        </div>




    </Modal>

}