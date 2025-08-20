import { Icons } from "./icons"

const style = {
    "sm": "w-10 h-10",
    "md": "w-12 h-12",
    "lg": "w-14 h-14",
    "profile": "w-44 h-44"
} as const
type sizeType = keyof typeof style

interface PropsType {
    size: sizeType,
    imgUrl: string,

}

export function ProfileIcon({ size, imgUrl }: PropsType) {

    return <div className={`${style[size]}  `}>
        {imgUrl === "null" ? <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" className=" rounded-full" alt="" /> :
            <img className={` ${style[size]} rounded-full object-contain`} src={imgUrl} />
        }
    </div>
}