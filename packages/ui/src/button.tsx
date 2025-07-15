
import React, { ReactNode } from "react"

interface PropsTypes {
    children: ReactNode,
    onClick?: (e: React.MouseEvent) => void,
    varient: styleType,

}

const style = {
    "primary": "  bg-buttonBlue text-white",
    "secondary": "text-white  hover:outline hover:outline-deepGray "
}

type styleType = keyof typeof style;

export function Button({ children, onClick, varient }: PropsTypes) {
    return <button onClick={onClick} className={`py-3  px-5 font-bold  cursor-pointer  ${style[varient]}  rounded `}>
        {children}
    </button>
}
