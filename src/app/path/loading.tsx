export default function Loading() {
  return (
    <div className="flex-1 flex flex-col justify-center min-h-[50vh] py-10 animate-fade-in w-full">
      <div className="animate-pulse flex flex-col w-full">
        
        {/* Skeleton Heading */}
        <div className="w-full space-y-4 mb-10">
          <div className="h-8 md:h-10 bg-teal/20 rounded-xl w-3/4"></div>
          <div className="h-8 md:h-10 bg-teal/20 rounded-xl w-1/2"></div>
        </div>
        
        {/* Skeleton Body Text */}
        <div className="w-full space-y-3 mb-12">
          <div className="h-5 bg-teal/10 rounded-lg w-full"></div>
          <div className="h-5 bg-teal/10 rounded-lg w-11/12"></div>
          <div className="h-5 bg-teal/10 rounded-lg w-4/5"></div>
        </div>

        {/* Skeleton Bottom Controls (matching the GuidedPath structure) */}
        <div className="mt-12 pb-8 flex items-center justify-between w-full">
          {/* Back button skeleton */}
          <div className="h-11 w-20 bg-teal/5 rounded-full"></div>
          
          {/* Progress dots skeleton */}
          <div className="flex gap-2.5 items-center justify-center">
            <div className="h-2.5 w-2.5 bg-teal/30 rounded-full"></div>
            <div className="h-2 w-2 bg-teal/10 rounded-full"></div>
            <div className="h-2 w-2 bg-teal/10 rounded-full"></div>
            <div className="h-2 w-2 bg-teal/10 rounded-full"></div>
            <div className="h-2 w-2 bg-teal/10 rounded-full"></div>
          </div>
          
          {/* Next button skeleton */}
          <div className="h-11 w-24 bg-teal/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
