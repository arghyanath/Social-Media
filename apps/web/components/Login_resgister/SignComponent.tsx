import { ReactElement } from "react"
import { VistagramHeader } from "./vistagramHeader"

interface PropsTypes {
    children: ReactElement
}
export function SignComponent({ children }: PropsTypes) {

    return <div className="flex flex-col gap-4">
        <div className="text-center">   <VistagramHeader size="lg" /></div>

        <div className=" text-liteGray text-center font-medium ">Sign up to see photos and videos from your friends.</div>
        {children}
        <div className="inline-flex py-2 items-center justify-center w-full">
            <hr className="w-full h-px  bg-deepGray border-0" />
            <span className="absolute px-3 font-medium text-liteGray -translate-x-1/2  left-1/2 bg-black">or</span>
        </div>
    </div>
}