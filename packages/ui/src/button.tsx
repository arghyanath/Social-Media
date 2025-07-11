
import { ReactNode } from "react"

interface PropsTypes {
    children: ReactNode,
    onClick?: () => void,
    varient: styleType
}

const style = {
    "primary": "  bg-buttonBlue",
    "secondary": " outline-2 outline-dark hover:outline hover:outline-deepGray "
}

type styleType = keyof typeof style;

export function Button({ children, onClick, varient }: PropsTypes) {
    return <button onClick={onClick} className={`py-3 px-5 font-bold text-white cursor-pointer rounded-md ${style[varient]}`}>
        {children}
    </button>
}
