import Image from "next/image";
import SectionContainer from "./SectionContainer";

export type HeroProps = {
  title: string;
  subtitle: string;
  bgImage?: string | null;
};

const Hero = ({ title, subtitle, bgImage = null }: HeroProps) => {
  return (
    <section
      data-section="hero"
      className="grid grid-cols-1 grid-rows-1 lg:min-h-[76vh]"
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt="RV Park"
          height="640"
          width="853"
          className="row-start-1 col-start-1 object-cover object-center w-full h-full"
        />
      )}
      <div className="row-start-1 col-start-1 bg-mcrv-black opacity-40 z-0"></div>
      <SectionContainer isHeroLayout>
        <div className="flex flex-col mt-32 lg:mt-40 py-32 lg:py-48 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
          <h1 className=" text-center mb-12 lg:mb-16 ">{title}</h1>
          <p className="text-2xl font-medium text-center mb-12 lg:mb-16">
            {subtitle}
          </p>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Hero;
