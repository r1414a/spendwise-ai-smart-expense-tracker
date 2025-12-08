import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/hero/Hero";
import HomeInsights from "@/components/home/HomeInsights";
import Preview from "@/components/home/Preview";
import ReactShare from "@/components/ReactShare";

export default function Home() {
 
  return (
    <>
    <Hero/>
    <ReactShare shareUrl={`https://spendwise-azure.vercel.app/post/68b1b58d800decc444e948c5`} title="this is react share title"/>
    <Features/>
    <Preview/>
    <HomeInsights/>
    <CTA/>
    </>
  );
}
