import {
  SectionContainer,
  Hero,
  FeaturesCard,
  Companies,
  Services,
  Features,
  Offerings,
  Pricing,
  Testimonial,
  Tools,
  Banner,
} from "@/components";

const HomeSection = () => {
  return (
    <SectionContainer>
      <div className="relative flex flex-col items-start justify-center w-full mx-auto">
        <div className="mx-auto relative flex flex-col items-cennter justify-center w-full">
          <Hero />

          <Features />

          <Services />

          <FeaturesCard />

          <Companies />

          <Offerings />

          <Pricing />

          <Testimonial />

          <Tools />

          <Banner />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
