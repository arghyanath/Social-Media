"use client"
import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { VistagramHeader } from "./vistagramHeader";
import { useState } from "react";
import { LogoutModal } from "./logoutModal";
import { useSession } from "next-auth/react";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";


export function Appbar() {
    const [showModel, setShowModel] = useState(false);
    const session = useSession();
    const router = useRouter();
    function toggleModal() {
        setShowModel(m => !m);
    }
    const imgUrl = String(session?.data?.user?.image)



    return <div>

        <div className=" z-20 text-white fixed top-0 left-0 w-screen flex justify-between px-6 items-center h-16 border-b-2 bg-black border-dark ">
            {showModel && <LogoutModal onClose={toggleModal} />}
            <div><VistagramHeader size="sm" /></div>
            {session.status === "authenticated" ?
                <div onClick={toggleModal}><ProfileIcon size="sm"
                    imgUrl={imgUrl}
                /></div>
                : <Button varient="secondary" onClick={() => router.push("/api/auth/login")}><div>Login</div></Button>
            }
        </div>
    </div>



} 