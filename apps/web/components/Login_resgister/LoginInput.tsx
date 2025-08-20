"use client"
import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"
import { LoginUserSchema } from "@repo/zod/types";
import { signIn } from "next-auth/react"
import Link from "next/link";
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
                passwordRef.current

            ) {
                const email = emailRef.current.value;
                const password = passwordRef.current.value;
                const user = LoginUserSchema.safeParse({ email, password })
                if (!user) return alert("Please enter valid credentials")
                await signIn("credentials", {
                    email,
                    password,
                    redirect: false
                })
                router.push("/home")
            }
            else {
                alert("Please enter details")
            }

        }}><div>Login</div></Button>
        <div className=" text-liteGray text-sm text-center">Don't have an account ? <span className=" underline hover:text-white"><Link href={"/api/auth/register"}>Register</Link></span> here</div>
    </div>
}

