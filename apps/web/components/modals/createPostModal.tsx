"use client"
import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons/icons";
import { Input } from "@repo/ui/input";
import { Modal } from "@repo/ui/modal";
import React, { useRef } from "react";

export function CreatePostModal({ onClose }: { onClose: () => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    function handleClick() {
        inputRef.current?.click()
    }
    function getFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        console.log(file)
    }

    return <Modal onClose={onClose} backgroundSlye=" backdrop-blur-xs z-20" position='middle'
        modalStyle="w-115 h-144 flex flex-col gap-4 p-6 bg-dark rounded text-white ">
        <Input placeholder="title" />
        <Input placeholder="caption" />
        <div className="w-full h-1/2 border border-liteGray rounded-md " onClick={handleClick}>

            <Input type="file" customStyle=" hidden" placeholder="" reference={inputRef} onChange={getFile} />
        </div>
        <div className=" flex justify-center">
            <Button varient="secondary" onClick={handleClick}>
                <div className="flex  justify-center items-center gap-1 ">

                    <Icons size="sm" name='imageIcon' />Upload image
                </div>
            </Button>
        </div>








    </Modal>

}