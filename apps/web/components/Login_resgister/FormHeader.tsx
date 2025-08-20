"use client"
import { ReactElement } from "react"
import { VistagramHeader } from "../Appbar/vistagramHeader"
import { Button } from "@repo/ui/button"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import LoginAsGuest from "./LoginAsGuest"

interface PropsTypes {
    children: ReactElement
}
export function FormHeader() {
    const router = useRouter()

    return <div className="flex flex-col gap-4">
        <div className="text-center">   <VistagramHeader size="lg" /></div>

        <div className=" text-liteGray text-center font-medium ">Sign up to see photos and videos from your friends.</div>
        <LoginAsGuest />
        <div className="inline-flex py-2 items-center justify-center w-full">
            <hr className="w-full h-px  bg-deepGray border-0" />
            <span className="absolute px-3 font-medium text-liteGray -translate-x-1/2  left-1/2 bg-black">or</span>
        </div>
    </div>
}