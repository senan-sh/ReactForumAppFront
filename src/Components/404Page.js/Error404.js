import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
export default function Error404({data:{setActivePage}}) {

  useEffect(() => {
    setActivePage("404")
  }, [])

  return (
    <div className="error-page-404">
      <div style={backgroundImageStyle} className="error-page-filter"></div>
      <div className="error-content">
        <h1>Xəta baş verdi.</h1>
        <p>Axtardığınız səhifə tapılmadı.</p>
        <Link to="/">
          <Button color="primary" variant="contained" className="error-home-btn">
            <span className="material-icons">home</span>
            <span>Ana səhifəyə geri dön</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
const backgroundImageStyle = {
  backgroundImage: "url(/assets/img/about-question.png)",
};
