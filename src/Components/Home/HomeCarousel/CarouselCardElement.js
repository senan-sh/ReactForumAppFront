//Substring to 60-
const subStringTo50 = (text) => {
  let final_text = "";
  if (text.length > 60) {
    final_text = final_text.concat(text.substring(0, 50)); //
    for (let i = 50; i < 60; i++) {
      const symbol = text[i];
      final_text = final_text.concat(symbol);
      if (symbol.match(/\s/)) {
        final_text = final_text.concat("...");
        break;
      }
    }
  } else {
    final_text.concat(text);
  }
  return final_text;
};
const staticImageUrl =
  "https://globalsymbols.com/uploads/production/image/imagefile/18928/17_18929_b1931257-9950-4cce-9776-208d44a3a19f.png";

export default function CarouselCardElement({ data, functions }) {
  const subbed_text = subStringTo50(data.question);

  return (
    <div className="home-carousel-card-wrapper">
      <div className="home-carousel-card">
        <p></p>
        <div className="home-carousel-card-question">
          <img
            className="home-carousel-card-image"
            src={data.user.image_src || staticImageUrl}
            alt="profile"
          />
          <p>
            <span>İstifadəçi: </span> John Doe
          </p>
          <p>
            <span>Sual: </span>
            {subbed_text}
          </p>
        </div>
        <div className="home-carousel-card-statistics">
          <div
            onClick={() => {
              functions.openModal(data);
            }}
            className="home-carousel-view-wrapper"
          >
            <span>
              <span className="material-icons-outlined">visibility</span>
            </span>
          </div>
          <div
            onClick={() => {
              functions.openDialog(data);
            }}
            className="home-carousel-reply-wrapper"
          >
            <span>
              <span className="material-icons-outlined">reply</span>
            </span>
          </div>
          <div onClick={functions.openStatisticsModal} className="home-carousel-statistics-wrapper">
            <span>
              <span className="material-icons-outlined">leaderboard</span>
            </span>
            <div className="invisible viewStatsPopUp">
              <span>
                Baxış sayı: <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
