"use client"
import { signOut } from "next-auth/react"
import { ProfileButton } from "../profile/profileButton"
import { useRouter } from "next/navigation"
import { Button } from "@repo/ui/button"
import { Modal } from "@repo/ui/modal"

export function LogoutModal({ onClose }: { onClose: () => void }) {
    const router = useRouter()

    return <Modal onClose={onClose} position='top-right' backgroundSlye="" modalStyle="w-44 h-32 bg-dark mt-16 mr-6 p-2 flex justify-between flex-col rounded text-white" >
        <div onClick={onClose}>
            <ProfileButton />
        </div>
        <Button varient="secondary" onClick={async () => {
            router.push("/api/auth/login")
            await signOut({ redirect: false })

        }}><div className="text-red-500">Logout</div></Button>
    </Modal>
}