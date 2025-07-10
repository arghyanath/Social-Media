import { ProfileIcon } from "@repo/ui/icons/profileIcon"
import { getServerSession } from "next-auth"


export async function CreatePost() {
    const session = await getServerSession()
    const fullName = String(session?.user?.name)
    const imgUrl = String(session?.user?.image)

    const style = "gap-4 w-full flex justify-center items-center rounded cursor-pointer hover:bg-deepGray p-3"
    return <div className=" flex  flex-col   bg-dark  p-4 rounded-md">
        <div className=" flex w-full gap-4" >
            <div>
                <ProfileIcon imgUrl={imgUrl} size="sm" />
            </div>
            <div className=" bg-black w-full text-liteGray outline outline-deepGray cursor-pointer hover:bg-deepGray  rounded-full flex  items-center ">
                <div className="pl-5">Create a post , {fullName}</div>
            </div>
        </div>



    </div>

}