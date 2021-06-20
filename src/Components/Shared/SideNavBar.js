import { Link } from "react-router-dom";

export default function SideNavBar(props) {
  return (
    <div className="sideNavBar closed">
      <div className="close-nav-wrapper">
        <span onClick={props.functions.closeSideNavBar} className="material-icons icon-close-nav">
          close
        </span>
      </div>
      <ul>
        <Link onClick={props.functions.closeSideNavBar} to="/">
          <li className="side-nav-list-element">
            <span className="material-icons">home</span>
            <span>Ana səhifə</span>
          </li>
        </Link>
        <hr />
        <Link onClick={props.functions.closeSideNavBar} to="/questions">
        <li className="side-nav-list-element">
          <span className="material-icons">search</span>
          <span>Sorğular</span>
        </li>
        </Link>
        <hr />
        <Link onClick={props.functions.closeSideNavBar} to="/account">
        <li className="side-nav-list-element">
          <span className="material-icons">account_circle</span>
          <span>Hesaba daxil ol</span>
        </li>
        </Link>
        <hr />
        <Link onClick={props.functions.closeSideNavBar} to="/how_to">
        <li className="side-nav-list-element">
          <span className="material-icons">help</span>
          <span>İstifadə qaydaları</span>
        </li>
        </Link>
        <hr />
        <Link onClick={props.functions.closeSideNavBar} to="/about">
        <li className="side-nav-list-element">
          <span className="material-icons">info</span>
          <span>Haqqımızda</span>
        </li>
        </Link>
      </ul>
    </div>
  );
}
