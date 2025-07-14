import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { getServerSession } from "next-auth";
interface PropsType {
    title: string,
    caption?: string
    imgUrl?: string,
    date: string,
    avatar?: string,
    fullName: string

}
export async function PostsCard({ title, imgUrl, caption, date, avatar, fullName }: PropsType) {

    return <div className=" w-full flex justify-center">
        <div className="flex justify-center w-4/5 flex-col gap-2 p-4 border-b-2 border-dark">
            <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                    <ProfileIcon size="sm" imgUrl={String(avatar)} />
                    <div>
                        <div>{fullName} </div>
                        <div className="text-sm text-gray-300">{title}</div>
                    </div>
                </div>
                <div className="text-sm">{date}</div>
            </div>
            {imgUrl && <div><img src={imgUrl} className=" rounded-xs object-contain" alt="post" /></div>}
            {caption && <div>{caption}</div>}
        </div>
    </div>

}