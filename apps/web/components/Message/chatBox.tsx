"use client"
import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons/icons";
import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { useEffect, useRef, useState } from "react";
import TextBubble from "./textBubble";
import { textInChat } from "@/lib/actions/textInChat";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ChatBoxSkeleteton from "./chatBoxSkeleteton";


export default function ChatBox({ senderId, receiver }: { senderId: number, receiver: { id: number, name: string, image?: string } }) {

    const messageRef = useRef<HTMLTextAreaElement>(null)
    const [messages, setMessages] = useState<Messages[]>([])

    const ws = new WebSocket("ws://localhost:8080")

    async function fetchChats() {

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chats/messages/${senderId}/${receiver.id}`)
        const messages: Messages[] = response.data.messages
        return messages

    }

    const { isPending, error, data } = useQuery({
        queryKey: [`${receiver.id}${senderId}`],
        queryFn: () => fetchChats()


    })

    useEffect(() => {
        if (data === undefined) return
        setMessages(data)
    }, [data])

    useEffect(() => {
        ws.onopen = () => {
            ws.send(JSON.stringify({
                "type": "connect",
                "senderId": String(senderId),
            }
            ))
        }
        ws.onmessage = (event) => {
            const msg = JSON.parse(event.data)
            setMessages(m => [...m, { senderId: Number(msg.senderId), receiverId: Number(msg.receiverId), text: msg.text }])
        }
    }, [])

    if (isPending) return <ChatBoxSkeleteton />
    if (error) return "error" + error.message

    return (
        <div className="flex-1 flex flex-col">
            <div className=" h-16 border-b-2  border-dark flex items-center px-4 gap-3">
                <ProfileIcon imgUrl={String(receiver.image)} size="sm" />
                <div>{receiver.name}</div>
            </div>
            <div className="flex-1 flex flex-col p-4 justify-between">
                <div className=" flex flex-col">
                    {messages.map((m, i) => <TextBubble key={i} type={m.senderId === senderId ? "sent" : "received"} text={m.text} />)}
                </div>
                <div className="flex border border-deepGray ">
                    <textarea
                        ref={messageRef}
                        className="w-full rounded p-2
                        outline-none 
                        resize-none scrollbar-none"
                        placeholder="write something" ></textarea>
                    <Button varient="secondary" onClick={() => {
                        if (!messageRef.current) return
                        const text = messageRef.current.value
                        setMessages(m => [...m, { senderId: senderId, receiverId: receiver.id, text: text }])
                        ws.send(JSON.stringify({
                            "type": "chat",
                            "senderId": String(senderId),
                            "receiverId": String(receiver.id),
                            "text": text
                        }))

                        textInChat(senderId, receiver.id, text)


                        messageRef.current.value = ""
                    }}
                    ><Icons name="postIcon" size="md" /></Button>
                </div>
            </div>
        </div>
    );
}