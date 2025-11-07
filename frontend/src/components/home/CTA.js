import Link from "next/link";

export default function CTA(){
    return(
        <section className="relative bg-darkblue">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-30  blur-3xl z-0"></div>
            <div className="relative max-w-screen-xl mx-auto py-32 space-y-4 text-center">

                <h1 className="text-5xl leading-15 text-mywhite font-bold capitalize max-w-lg mx-auto">Start tracking your expenses today.</h1>
                <Link href={'/dashboard'}>
                    <button className="mt-4 py-2.5 bg-lightred text-mywhite px-6 font-semibold rounded-md cursor-pointer shadow-lg shadow-mywhite/20 hover:bg-mywhite hover:text-gray">
                        Add First Expense
                    </button>
                </Link>
            </div>
        </section>
    )
}