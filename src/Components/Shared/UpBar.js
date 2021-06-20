export default function UpBar(props) {
  return (
    <div className="upBar">
      <div onClick={props.functions.openSideNavBar} className="menuIcon">
        <span className="material-icons-round menu-burger-icon-nav">menu</span>
      </div>
      <div className="introduction">
        <h1>Azərbaycanda ilk "Sual-Cavab" platforması</h1>
        <span className="material-icons-round">question_answer</span>
      </div>
      <div className="up-progress-wrapper">
        <div className="progress-bar-relative">
          <div id="up-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
