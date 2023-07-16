interface SectionContainerProps {
  children: React.ReactNode;
  isHeroLayout?: boolean;
}

const SectionContainer = ({
  children,
  isHeroLayout = false,
}: SectionContainerProps) => {
  const heroClasses = isHeroLayout
    ? "col-start-1 col-span-1 row-start-1 row-span-1 flex items-center"
    : "";

  return (
    <div
      className={`container px-4 sm:px-6 md:px-8 mx-auto relative z-10 ${heroClasses}`}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
