import { Skeleton } from "../ui/skeleton";

export default function ChatSkeleton() {
    return (
        <div className="w-full h-12 mt-2 flex gap-2 items-center px-2">
            <Skeleton className="h-10 w-10 rounded-full opacity-50" />
            <Skeleton className=" h-4 w-[200px]" />
        </div>
    );
}