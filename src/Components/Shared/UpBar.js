export default function UpBar({ data: { setIsNavOpen } }) {



  return (
    <div className="upBar">
      <div onClick={()=>{setIsNavOpen(true)}} className="menuIcon">
        <span className="material-icons-round menu-burger-icon-nav">menu</span>
      </div>
      <div className="introduction">
        <h1>Azərbaycanda ilk "Sual-Cavab" platforması</h1>
        <span className="material-icons-round">question_answer</span>
      </div>
    </div>
  );
}
