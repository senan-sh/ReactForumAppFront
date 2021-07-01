import { useEffect } from "react";
import AboutContent from "./AboutContent";
import AboutStatistics from "./AboutStatistics";

export default function About({data:{setActivePage}}) {

  useEffect(() => {
    setActivePage("about")
  }, [])

  return (
    <div className="section-about">
      <AboutStatistics data={{ improvement: 90, support: 79, security: 95, groups: 65 }} />
      <hr />
      <AboutContent />
    </div>
  );
}
