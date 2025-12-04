import AnimatedSectionBlock from "../ui/AnimateSectionBlock";
import Heading from "../ui/Heading";
import CreatePost from "./CreatePost";

const FEATURES = [
    {
        icon: "🧠",
        title: "Smart Categorization",
        desc: "Automatically understands your expense like “1kg bhindi” → “Groceries”"
    },
    {
        icon: "🤖",
        title: "AI Assistant",
        desc: "Ask things like “How much did I spend on groceries last week?”"
    },
    {
        icon: "📊",
        title: "Spending Insights",
        desc: "Understand patterns, see trends, and get monthly projections"
    },
    {
        icon: "💡",
        title: "Personalized Tips",
        desc: "AI gives you saving suggestions based on your habits"
    },
]

export  default function Features(){
    return(
        <section className="relative py-32 bg-white px-4">
            <CreatePost/>
            <div className="max-w-screen-xl mx-auto">
                {/* <div className="absolute right-44 top-44 w-96 h-96 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 blur-3xl"></div> */}
                <AnimatedSectionBlock>
                <Heading css="text-start" heading="What Makes It Smart"/>
                </AnimatedSectionBlock>
                <div className="relative mt-10 flex flex-wrap gap-4 md:gap-8">
                    {
                        FEATURES.map((feature,i) => (
                            <div key={i} className="basis-full md:basis-2/5 bg-lightblue ring-1 ring-gray-200 h-40 md:h-36 pt-4 px-6 rounded-xl space-y-2 hover:bg-mywhite cursor-pointer hover:shadow-xl hover:shadow-lightblue">
                                <div className="flex items-center gap-2">
                                    {feature.icon}
                                    <h3 className="text-lg font-semibold text-darkblue">{feature.title}</h3>
                                </div>
                                <div className="max-w-sm">
                                    <p className="text-md font-semibold text-myborder/70">{feature.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}