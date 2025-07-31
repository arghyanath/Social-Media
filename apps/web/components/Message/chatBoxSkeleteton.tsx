import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons/icons";
import { Skeleton } from "../ui/skeleton";

export default function ChatBoxSkeleteton() {
    return (
        <div className="flex-1 flex flex-col">
            <div className=" h-16 border-b-2  border-dark flex items-center px-4 gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-3 w-[100px]" />
            </div>
            <div className="flex-1 flex flex-col p-4 justify-between">
                <div className=" flex flex-col">
                    <div className={` flex  justify-end w-full py-1`}>
                        <Skeleton className="h-4 w-[100px]" />
                    </div>
                    <div className={` flex  justify-start w-full py-1`}>
                        <Skeleton className="h-5 w-[100px]" />
                    </div>
                </div>
                <div className="flex border border-deepGray ">
                    <textarea
                        className="w-full rounded p-2
                            outline-none 
                            resize-none scrollbar-none"
                        placeholder="write something" ></textarea>
                    <Button varient="secondary"
                    ><Icons name="postIcon" size="md" /></Button>
                </div>
            </div>
        </div>
    );
}