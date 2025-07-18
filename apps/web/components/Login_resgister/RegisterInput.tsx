"use client"
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { useRef } from "react";
import { createUser } from "../../lib/actions/createUser";
import { useRouter } from "next/navigation";


export default function RegisterInput() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    return <div className="gap-3 flex flex-col ">
        <Input placeholder="Full Name" reference={nameRef} />
        <Input placeholder="Email" reference={emailRef} />
        <Input placeholder="Password" reference={passwordRef} />
        <Button varient="primary" onClick={async (e) => {
            e.preventDefault()
            if (emailRef.current && passwordRef.current && nameRef.current) {
                const res = await createUser(emailRef.current?.value ?? "", passwordRef.current?.value ?? "", nameRef.current?.value ?? "")
                alert(res)
                router.push("/api/auth/login")
            }

        }}><div>Sign up</div></Button>
    </div>
}