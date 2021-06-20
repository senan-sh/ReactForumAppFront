import { useEffect } from "react";
import HomeFirstSection from "./HomeFirstSection";
import HomeSecondSection from "./HomeSecondSection";
import HomeThirdSection from "./HomeThirdSection";

export default function HomeAnimatedSection() {
  let animated_svgs = 0;

  const intersection_observer_callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const path_array = entry.target.querySelectorAll("path, circle");
        setTimeout(() => {
          for (const path of path_array) {
            path.style.animationPlayState = "running";
          }
        }, 500);
        animated_svgs++;
        if (animated_svgs === 3) {
          observer.disconnect();
        }
      }
    });
  };

  const animateSvgPaths = (svg_array) => {
    const io = new IntersectionObserver(intersection_observer_callback, { rootMargin: "-30px" });
    for (const svg of svg_array) {
      io.observe(svg);
    }
  };

  useEffect(() => {
    const svg_array = document.getElementsByClassName("home-animating-svg");
    animateSvgPaths(svg_array);
  }, []);

  return (
    <div>
      <HomeFirstSection />
      <hr />
      <HomeSecondSection />
      <hr />
      <HomeThirdSection />
    </div>
  );
}
