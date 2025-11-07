import Link from "next/link"

export default function Hero(){
    return(
        <main className="relative bg-lightblue">
      <div className="absolute top-56 right-1/2  w-96 h-96 bg-gradient-to-tr from-mywhite to-darkblue opacity-30 blur-3xl"></div>
      <div className="relative z-10 min-h-screen max-w-screen-xl mx-auto flex gap-4 items-center">
        <div className="basis-2/3 pt-22 space-y-2">
          <h1 className="text-6xl font-semibold text-lightred animate_animate animate__zoomIn">
            AI Expense Tracker
          </h1>
          <h1 className="text-6xl font-semibold text-darkblue">
            Track <span className="text-lightred">smarter</span>. Spend <span className="text-lightred">better</span>.
          </h1>
          <p className="text-lg text-myborder/80 max-w-lg mt-6">Automatically categorize your expenses, get spending insights, and take control of your finances — powered by AI.</p>

          <Link href={'/dashboard'}>
          <button className="mt-4 py-2.5 bg-lightred text-mywhite px-8 rounded-md cursor-pointer hover:bg-darkblue">Try Demo</button>
          </Link>
        </div>
        <div className="basis-1/3"></div>
      </div>
    </main>
    )
}