"use client"
import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useRef } from "react";


export default function LoginInput() {
    const router = useRouter()
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    return <div className="gap-3 flex flex-col ">
        <Input placeholder="Email" reference={emailRef} />
        <Input placeholder="Password" reference={passwordRef} />
        <Button varient="primary" onClick={async () => {
            if (
                emailRef.current &&
                passwordRef.current &&
                emailRef.current.value &&
                passwordRef.current.value
            ) {
                await signIn("credentials", {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                    redirect: false
                })
                router.push("/home")
            }
            else {
                alert("Please enter details")
            }

        }}><div>Login</div></Button>
    </div>
}

