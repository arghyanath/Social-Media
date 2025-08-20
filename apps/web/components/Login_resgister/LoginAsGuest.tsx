"use client"
import { Button } from "@repo/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginAsGuest() {
    const router = useRouter()
    return (

        <Button onClick={async () => {
            await signIn("credentials", {
                email: "guest@email.com",
                password: "password",
                redirect: false
            })
            router.push("/home")
        }} varient="primary"><div>Log in as Guest</div></Button>

    );
}