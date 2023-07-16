import Image from "next/image";
import Link from "next/link";
import SectionContainer from "./SectionContainer";

const Header = () => {
  return (
    <header>
      <SectionContainer>
        <div className="flex flex-row justify-between items-center py-4 lg:py-6">
          <Link href="/" className="text-inherit block w-full text-center">
            <h1 className="text-3xl font-bold sr-only">Mid Cities RV Park</h1>
            <Image
              src="/mid-cities-rv-park.png"
              alt="Mid Cities RV Park"
              className="w-32 lg:w-40"
              width={300}
              height={234}
            />
          </Link>

          <Link href="#contact" className="text-inherit block w-full text-end">
            <p className="text-lg font-bold">Contact Us</p>
          </Link>
        </div>
      </SectionContainer>
    </header>
  );
};

export default Header;
