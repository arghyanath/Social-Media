"use client"
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { useRef } from "react";
import { createUser } from "../../app/lib/actions/createUser";
import { useRouter } from "next/navigation";


export default function RegisterInput() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    return <div className="gap-2 flex flex-col ">
        <Input placeholder="Full Name" round="none" reference={nameRef} />
        <Input placeholder="Email" round="none" reference={emailRef} />
        <Input placeholder="Password" round="none" reference={passwordRef} />
        <Button varient="primary" onClick={async () => {
            await createUser(emailRef.current?.value ?? "", passwordRef.current?.value ?? "", nameRef.current?.value ?? "")
            router.push("/login")
        }}><div>Sign up</div></Button>
    </div>
}