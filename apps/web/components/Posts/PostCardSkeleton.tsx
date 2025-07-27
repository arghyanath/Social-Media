import { Skeleton } from "@/components/ui/skeleton"
import { CommentSkeleton } from "./commentsSkelton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col  ">
            <CommentSkeleton />
            <Skeleton className="h-90 w-90 rounded-xl" />

        </div>
    )
}
