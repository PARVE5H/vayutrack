import { Skeleton } from "./ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="space-y-6">
        {/* favourites skeleton */}
        <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-1/4 rounded-lg" />
            <Skeleton className="h-6 w-1/4 rounded-lg" />
            <Skeleton className="h-6 w-1/4 rounded-lg" />
            <Skeleton className="h-6 w-1/4 rounded-lg" />
        </div>
                {/* favourites skeleton end here */}

                
        <div className="grid gap-6">
        <Skeleton className="h-[300px] w-full rounded-lg" />
        <Skeleton className="h-[300px] w-full rounded-lg" />
             <div className="grid gap-6 md:grid-cols-2">
                  <Skeleton className="h-[300px] w-full rounded-lg" />
                  <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>
        </div>
    </div>
  );
};

export default LoadingSkeleton;
