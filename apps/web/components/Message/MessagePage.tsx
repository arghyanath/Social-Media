"use client"
import { useState } from "react";
import SearchUser from "./searchUser";
import ChatBox from "./chatBox";

export default function MessagePage({ senderId }: { senderId: number }) {
    const [receiver, setReceiver] = useState<{ id: number, name: string, image?: string }>()

    return (
        <div className=" flex">
            <div className="w-[30%] border-r-2 border-dark h-[90vh] flex flex-col ">
                <SearchUser senderId={senderId} setReceiver={setReceiver} />

            </div>
            {receiver !== undefined ? <ChatBox receiver={receiver} senderId={senderId} />
                : <div className="flex-1 flex justify-center items-center">Start Messaging</div>}

        </div>
    );
}