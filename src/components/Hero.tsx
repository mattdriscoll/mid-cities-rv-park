import Image from "next/image";
import SectionContainer from "./SectionContainer";

export type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section
      data-section="hero"
      className="grid grid-cols-1 grid-rows-1 lg:h-[76vh]"
    >
      <Image
        src="/alain-wong-BnXGBpGy-bQ-unsplash.jpg"
        alt="RV Park"
        height="640"
        width="853"
        className="row-start-1 col-start-1 object-cover object-center w-full max-h-full"
      />
      <div className="row-start-1 col-start-1 bg-mcrv-black opacity-40 z-0"></div>
      <SectionContainer isHeroLayout>
        <div className="flex flex-col py-12 lg:py-20">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center mb-12 lg:mb-16 uppercase">
            {title}
          </h1>
          <h2 className="text-2xl font-medium text-center mb-12 lg:mb-16">
            {subtitle}
          </h2>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Hero;
