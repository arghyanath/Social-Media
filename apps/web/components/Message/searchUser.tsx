"use client"

import { Icons } from "@repo/ui/icons/icons";
import { Input } from "@repo/ui/input";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import UserCard from "./userCard";
import { useQuery } from "@tanstack/react-query";
import { createChat } from "@/lib/actions/createChat";
import { useRouter } from "next/navigation";
import { CommentSkeleton } from "../Posts/commentsSkelton";
import ChatSkeleton from "./chatSkeleton";


export default function SearchUser({ senderId, setReceiver }: { senderId: number, setReceiver: Dispatch<SetStateAction<{ id: number, name: string, image?: string } | undefined>> }) {
    const [userArr, setUserArr] = useState<{ id: number, name: string, image?: string }[]>([])
    const [searchBox, setSearchBox] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const [messagedArr, setMessagedArr] = useState<{ id: number, name: string, image?: string }[]>([])

    const router = useRouter()
    const { isPending, error, data } = useQuery({
        queryKey: [`chats`],
        queryFn: async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chats/${senderId}`)
            const chats: Chats[] = response.data.chats
            return chats
        }


    })

    function setData() {
        if (data === undefined) return
        data.forEach(e => {
            if (e.Sender.id === senderId) {

                setMessagedArr(m => [{ id: e.Receiver.id, name: e.Receiver.name, image: e.Receiver.image }, ...m])

            }




        })
    }

    useEffect(() => {
        setData()



    }, [data])
    useEffect(() => {
        return () => setMessagedArr([]);
    }, []);

    if (error) return "error:" + error.message



    return (
        <div className=" p-4">
            <div className=" border-2 border-deepGray rounded-full relative" onClick={() => {
                inputRef.current?.focus()
                setSearchBox(e => !e)
            }}>
                <div className="flex gap-2 p-2">


                    <Icons name="searchIcon" size="md" />
                    <Input placeholder="Search" customStyle=" outline-none border-none w-full` " reference={inputRef} onChange={async (e) => {
                        if (e.target.value.length === 3) {

                            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${e.target.value}`)
                            const user = data.user
                            setUserArr(user)





                        }
                    }
                    } />
                </div>

                {searchBox && <div className=" w-full h-56 border-2 border-deepGray rounded-md mt-2 p-2 bg-dark absolute">
                    {userArr.map(u => <div className=" mt-2" key={u.id} onClick={(e) => {
                        e.preventDefault()
                        setSearchBox(false)
                        if (u.id === senderId) {
                            router.push("/profile")
                            return
                        }

                        if (inputRef.current) inputRef.current.value = ""
                        setReceiver(u)

                        createChat(senderId, u.id)
                    }}><UserCard user={u} /></div>)}
                </div>}
            </div>

            {
                isPending && <div>
                    <ChatSkeleton />
                    <ChatSkeleton />
                    <ChatSkeleton />
                    <ChatSkeleton />
                    <ChatSkeleton />
                </div>
            }
            {messagedArr.map(m => <div className=" mt-2" key={m.id} onClick={(e) => {
                e.preventDefault()
                setSearchBox(false)
                setReceiver(m)


            }}>
                <UserCard user={m} />
            </div>)}



        </div>
    );
}