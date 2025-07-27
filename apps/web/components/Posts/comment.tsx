import { ProfileIcon } from "@repo/ui/icons/profileIcon";

export default function Comment({ comment, avatar, fullName, createdAt }: { comment: string, avatar?: string, fullName: string, createdAt: string }) {
    return (
        <>
            <div className=" text-sm flex max-w-full p-2 gap-2 ">
                <div><ProfileIcon imgUrl={String(avatar)} size="sm" /></div>
                <div className=" flex flex-col w-full ">
                    <div className="flex w-full gap-2 items-center   text-white">
                        <div>{fullName}</div>
                        <div className="text-xs text-liteGray">{createdAt}</div>
                    </div>
                    <div className=" wrap-anywhere">{comment}</div>
                </div>
            </div>
        </>
    );
}