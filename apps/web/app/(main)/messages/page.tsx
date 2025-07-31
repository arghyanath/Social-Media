import ChatBox from "@/components/Message/chatBox";
import MessagePage from "@/components/Message/MessagePage";
import SearchUser from "@/components/Message/searchUser";
import { authOptions } from "@/lib/auth";
import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons/icons";
import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { Input } from "@repo/ui/input";
import axios from "axios";
import { getServerSession } from "next-auth";

export default async function () {

    const session = await getServerSession(authOptions)
    if (!(session && session.user)) return <div>User not logged in</div>
    const id = String(session.user.id)


    return <div className="ml-58  text-white  ">
        <MessagePage senderId={Number(id)} />


    </div>
}