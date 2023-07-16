import Link from "next/link";
import SectionContainer from "./SectionContainer";

const Footer = () => {
  return (
    <footer className="mt-auto bg-mcrv-black text-mcrv-white py-2">
      <SectionContainer>
        <div className="flex flex-row justify-between items-center">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Mid Cities RV Park
          </p>
          <p>
            Built by{" "}
            <Link href="https://815dev.io" className="">
              815dev
            </Link>
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
