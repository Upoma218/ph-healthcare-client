import HeroSection from "@/components/Shared/UI/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/Shared/UI/HomePage/HowItWorks/HowItWorks";
import Specialist from "@/components/Shared/UI/HomePage/Specialist/Specialist";
import Stats from "@/components/Shared/UI/HomePage/Stats/Stats";
import TopRatedDoctors from "@/components/Shared/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/Shared/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialist></Specialist>
      <TopRatedDoctors></TopRatedDoctors>
      <WhyUs></WhyUs>
      <HowItWorks></HowItWorks>
      <Stats></Stats>
    </>
  );
};

export default HomePage;
