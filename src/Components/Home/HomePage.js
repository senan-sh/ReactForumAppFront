//Components
import HomeAnimatedSection from "./HomeAnimatedSection/HomeAnimatedSection";
import HomeAboutSection from "./HomeAbout/HomeAboutSection";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import { useEffect } from "react";

export default function HomePage({ data: { setActivePage } }) {


  useEffect(() => {
    setActivePage("home")
  }, [])

  return (
    <div>
      <HomeAnimatedSection />
      <HomeAboutSection />
      <HomeCarousel />
    </div>
  );
}
