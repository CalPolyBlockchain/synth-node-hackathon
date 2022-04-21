import React from "react";
import HeroSection from "../sections/HeroSection";
import StackSection from '../sections/StackSection';
import { home_page_text } from "../home_page_text";
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
      <div className="flex flex-row justify-center items-center ">
      </div>
      <PoolShowcase apps = {home_page_text.apps}/>
    </div>
  );
}

export default Home;
