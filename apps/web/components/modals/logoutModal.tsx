"use client"
import { signOut } from "next-auth/react"
import { ProfileButton } from "../profileButton"
import { redirect, useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@repo/ui/button"

export function LogoutModal({ onClick }: { onClick: () => void }) {
    const router = useRouter()


    return <div className="w-screen h-screen  fixed top-0 left-0 flex justify-end " onClick={onClick}>
        <div className="w-44 h-32 bg-dark mt-16 mr-6 p-2 flex justify-between flex-col rounded text-white">
            <ProfileButton />
            <Button varient="secondary" onClick={async () => {
                await signOut({ redirect: false })
                router.push("/login")
            }}><div className="text-red-500">Logout</div></Button>
        </div>
    </div>
}