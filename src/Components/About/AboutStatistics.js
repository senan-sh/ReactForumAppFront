import { useEffect } from "react";

export default function AboutStatistics({ data }) {
  let filled_statistic_lines = 0;


  const intersection_observer_callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const line = entry.target;
        setTimeout(() => {
          line.style.width = line.dataset.width.concat("%");
        }, 500);
        filled_statistic_lines++;
        if (filled_statistic_lines === entries.length) {
          observer.disconnect();
        }
      }
    });
  };

  const fillLine = (LineArray) => {
    const io = new IntersectionObserver(intersection_observer_callback, { rootMargin: "-40px" });
    for (const line of LineArray) {
      io.observe(line);
    }
  };

  useEffect(() => {
    const lines = document.getElementsByClassName("horizontal-stat-line-fill");
    fillLine(lines);
  }, []);


const backStyleForImage ={
  backgroundImage: "url(/assets/img/about-productivity-back.jpg)",
  backgroundSize: "cover",
}




  return (
    <div className="about-page-statistics-wrapper">
      <div style={backStyleForImage} className="about-page-statistics">
        <ul>
          <li>
            <p>
              <span className="material-icons-outlined">self_improvement</span>Şəxsi inkişaf
            </p>
            <div className="horizontal-stat-line-empty">
              <div data-width={data?.improvement || 80} className="horizontal-stat-line-fill"></div>
            </div>
          </li>
          <li>
            <p>
              <span className="material-icons-outlined">support_agent</span>Dəstək
            </p>
            <div className="horizontal-stat-line-empty">
              <div data-width={data?.support || 60} className="horizontal-stat-line-fill"></div>
            </div>
          </li>
          <li>
            <p>
              <span className="material-icons-outlined">security</span>Məxfilik
            </p>
            <div className="horizontal-stat-line-empty">
              <div data-width={data?.security || 50} className="horizontal-stat-line-fill"></div>
            </div>
          </li>
          <li>
            <p>
              <span className="material-icons-outlined">groups</span>Kollektiv bacarıqlar
            </p>
            <div className="horizontal-stat-line-empty">
              <div data-width={data?.groups || 70} className="horizontal-stat-line-fill"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
