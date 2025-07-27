import { Skeleton } from "@/components/ui/skeleton"

export function CommentSkeleton() {
    return (
        <div className="flex items-center space-x-4 p-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-3 w-[250px]" />
                <Skeleton className="h-3 w-[200px]" />
            </div>
        </div>
    )
}
