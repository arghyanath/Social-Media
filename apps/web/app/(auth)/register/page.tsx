
import { Button } from "@repo/ui/button"
import { FormHeader } from "../../../components/Login_resgister/FormHeader"

import RegisterInput from "../../../components/Login_resgister/RegisterInput";

export default function Register() {


    return <div className="w-screen h-screen flex justify-center items-center">
        <div className=" w-88 border border-deepGray flex flex-col gap-4 p-8">
            <FormHeader><Button varient="primary"><div>Log in with Facebook</div></Button></FormHeader>
            <RegisterInput />

        </div>
    </div>
}