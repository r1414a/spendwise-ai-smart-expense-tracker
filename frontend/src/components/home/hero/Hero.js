import HeroHeading from "./HeroHeading";
import HeroSubHeading from "./HeroSubHeading";
import AnimatedHeroBlock from "./AnimatedHeroBlock";
import HeroPara from "./HeroPara";
import HeroCTA from "./HeroCTA"

export default function Hero() {
  return (
    <main className="relative bg-lightblue">
      <div className="absolute top-56 right-1/2  w-96 h-96 bg-gradient-to-tr from-mywhite to-darkblue opacity-30 blur-3xl"></div>
      <div className="relative z-10 min-h-screen w-full md:max-w-screen-xl mx-0 md:mx-auto flex flex-col md:flex-row gap-4 items-center px-4">
        <div className="basis-full md:basis-2/3 pt-40 md:pt-22 space-y-3">
          <AnimatedHeroBlock>
          <HeroHeading/>
          <HeroSubHeading/>
          
          <HeroPara/>
          <HeroCTA/>

          </AnimatedHeroBlock>
        </div>
        <div className="basis-1/3"></div>
      </div>
    </main>
  );
}
