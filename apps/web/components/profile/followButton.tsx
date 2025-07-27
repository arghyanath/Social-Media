"use client"
import { follow } from "../../lib/actions/follow";
import { useState } from "react";
import { unfollow } from "../../lib/actions/unfollow";


export default function FollowButton({ followerId, followingId, isFollowed }:
    { followerId: number, followingId: number, isFollowed: boolean }) {
    const [followed, setFollowed] = useState(isFollowed)
    return (
        <>
            {followed ?
                <div className=" text-liteGray cursor-pointer text-md font-bold" onClick={(e) => {
                    e.preventDefault()
                    unfollow(followerId, followingId)
                    setFollowed(false)

                }}>Following</div>
                :
                <div className=" text-buttonBlue cursor-pointer text-md font-bold" onClick={(e) => {
                    e.preventDefault()
                    follow(followerId, followingId)
                    setFollowed(true)
                }}>Follow</div>
            }
        </>
    );
}