export default function HomeAboutSection() {
  return (
    <div style={backgroundImageFixedStyle} className="home-about-section">
      <div className="home-about-image-wrapper">
        <div className="background-image-fader"></div>
        <p>Layihəmizin əsas məqsədi insanlar arasında fikir mübadiləsini inkişaf etdirməkdir.</p>
      </div>
    </div>
  );
}

const backgroundImageFixedStyle = {
  backgroundImage: "url(/assets/img/community_image.jpg)",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
};
