import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import SectionContainer from "./SectionContainer";

interface FeatureItem {
  title: string;
}

interface FeatureListProps {
  title: string;
  body: TinaMarkdownContent | null;
  features: FeatureItem[];
}

const FeatureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" x="0px" y="0px">
    <path
      d="M12,23A11,11,0,1,0,1,12,11,11,0,0,0,12,23ZM6.29,12.29a1,1,0,0,1,1.41,0L10,14.59l5.79-5.79a1,1,0,0,1,1.41,1.41l-6.5,6.5a1,1,0,0,1-1.41,0l-3-3A1,1,0,0,1,6.29,12.29Z"
      fill="currentColor"
    />
  </svg>
);

const FeatureItem = ({ title }: FeatureItem) => (
  <li className="grid grid-cols-[3rem,_1fr] gap-8 md:block py-6 text-mcrv-white mx-auto w-full md:w-full">
    <div className="w-12 h-12  text-mcrv-white ">
      <FeatureIcon />
    </div>
    <p
      className="md:mt-4 text-xl font-semibold leading-tight"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </li>
);

const FeatureList = ({ title, body = null, features }: FeatureListProps) => {
  return (
    <section data-section="feature-list">
      <SectionContainer>
        <div className="flex flex-col py-12 lg:py-20">
          <h2 className="text-center mb-12 lg:mb-16">{title}</h2>
          {body && (
            <div className="prose prose-lg max-w-none mb-12 lg:mb-16">
              <TinaMarkdown content={body} />
            </div>
          )}
          {Array.isArray(features) && features.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
              {features.map(({ title }) => (
                <FeatureItem key={title} title={title} />
              ))}
            </ul>
          )}
        </div>
      </SectionContainer>
    </section>
  );
};

export default FeatureList;
