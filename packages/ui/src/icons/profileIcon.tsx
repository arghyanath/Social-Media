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
    return <div className={style[size]}>
        <img className="rounded-full" src={imgUrl} alt="profile pic" />
    </div>
}