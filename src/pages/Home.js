import React from "react";
import HeroSection from "../sections/HeroSection";
import HeroSection2 from "../sections/HeroSection2";
import StackSection from '../sections/StackSection';
import TeamSection from '../sections/TeamSection';
import { home_page_text } from "../home_page_text";
import GifCardSection from '../sections/GifCardSection';
import OutlinedBox from "../components/OutlinedBox";
import HeroSection3 from "../sections/HeroSection3";
import PoolShowcase from "../components/PoolShowcase";
import InterestDemo from "../components/InterestDemo";
function Home() {
  // HOME PAGE
  return (
    <div className="">
    <div className="bg-hero-img mx-0 bg-cover bg-top bg-no-repeat px-0">
      <HeroSection {...home_page_text.hero_section1} />
      </div>
      {/* STACK SECTION */}
      <div className="m-4 items-start">
        <StackSection {...home_page_text.stack_section} />
      </div>
      {/* Hero section 2 */}
        <HeroSection2 {...home_page_text.hero_section2} />
      <div className="flex flex-row justify-center items-center ">
      </div>
      <div className="flex flex-row">
        <HeroSection3 {...home_page_text.hero_section3} />
        </div>
      <div className="flex flex-row justify-center items-center ">
      </div>
      <InterestDemo />
      <PoolShowcase apps={home_page_text.apps} />

      <GifCardSection {...home_page_text} />
      <TeamSection team={home_page_text.team} />
    </div>
  );
}

export default Home;
