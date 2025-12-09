export default function ExpenseLoadingSkeleton(){
    return(
        <div className="mt-10 flex flex-wrap gap-4 ">
            {
                [...Array(4)].map((_,i) => (
                    <div key={i} className="p-4 min-h-28 rounded-xl w-sm md:max-w-md bg-white/20 backdrop-blur-sm ring-1 ring-lightgray/60 animate-pulse">
                        <div className="flex gap-2 items-center">
                            <div className="h-3 w-32 bg-white/40 rounded-full"></div>
                            <div className="w-12 h-8 bg-white/40 rounded-lg"></div>
                        </div>
                        <div className="mt-3 h-2 w-72 bg-white/40 rounded-full"></div>
                        <div className="mt-3 h-2 w-72 bg-white/40 rounded-full"></div>
                    </div>
                ))
            }  
        </div>
    )
}