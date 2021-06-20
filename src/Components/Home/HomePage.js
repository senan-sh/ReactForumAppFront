//Components
import HomeAnimatedSection from "./HomeAnimatedSection/HomeAnimatedSection";
import HomeAboutSection from "./HomeAbout/HomeAboutSection";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

export default function HomePage() {
  return (
    <div>
      <HomeAnimatedSection />
      <HomeAboutSection />
      <HomeCarousel />
    </div>
  );
}
