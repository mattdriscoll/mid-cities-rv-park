import ContactForm from "@/components/ContactForm";
import FeatureList from "@/components/FeatureList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  const features = [
    {
      // icon: "",
      title: "Covered Rv Spots - Large Pull Through and Back In",
    },
    {
      // icon: "",
      title: "Fiber internet - Hardwired to pedestal",
    },
    {
      // icon: "",
      title: "All Concrete Roads",
    },
    {
      // icon: "",
      title: "Dustless Decomposed Granite Rv Pads",
    },
    {
      // icon: "",
      title: "Huge Clubhouse with Game Room",
    },
    {
      // icon: "",
      title: "Large Dog Parks with Activity Courses and Dog Wash Station",
    },
    {
      // icon: "",
      title: "Workout Room",
    },
    {
      // icon: "",
      title: "Co Working Space",
    },
    {
      // icon: "",
      title:
        "Large Laundry Room with Hang up racks and countertops for folding",
    },
    {
      // icon: "",
      title: "Individual full bathrooms with large showers",
    },
    {
      // icon: "",
      title: "Huge Pull Through and Back In Spaces",
    },
    {
      // icon: "",
      title: "Huge Full Outdoor Kitchen and Covered Patio",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Mid Cities RV Park"
          subtitle="DFW's newest RV park, located in the heart of the metroplex. We are a family owned and operated RV park with a focus on providing a safe, clean, and friendly environment for our guests."
          bgImage="/bg-hero.jpg"
        />
        <FeatureList features={features} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
