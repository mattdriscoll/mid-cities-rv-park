import ContactForm from "@/components/ContactForm";
import FeatureList from "@/components/FeatureList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { client } from "../../tina/__generated__/client";

const components = {
  Hero,
  FeatureList,
  ContactForm,
  ImageGallery,
};

export default async function Home() {
  const pageData = await client.queries.page({
    relativePath: "home.mdx",
  });

  return (
    <>
      <Header />
      <main>
        <TinaMarkdown
          content={pageData?.data?.page?.body}
          components={components}
        />
      </main>
      <Footer />
    </>
  );
}
