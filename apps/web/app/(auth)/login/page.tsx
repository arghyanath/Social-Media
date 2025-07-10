

import { Button } from "@repo/ui/button"
import { SignComponent } from "../../../components/Login_resgister/SignComponent"
import LoginInput from "../../../components/Login_resgister/LoginInput";

export default function Login() {


    return <div className="w-screen h-screen flex justify-center items-center">
        <div className=" w-88 border border-deepGray flex flex-col gap-4 p-8">
            <SignComponent><Button varient="primary"><div>Log in with Facebook</div></Button></SignComponent>
            <LoginInput />

        </div>
    </div>
}