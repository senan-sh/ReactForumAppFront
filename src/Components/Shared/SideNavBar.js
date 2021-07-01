import { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

export default function SideNavBar({ data: { isNavOpen, setIsNavOpen, activePage } }) {

  const sideNavBar = useRef(null);
  useEffect(() => {
    if (isNavOpen) {
      sideNavBar.current.classList.remove("closed")
    } else {
      sideNavBar.current.classList.add("closed")
    }
  }, [isNavOpen])

  const nav_link_list = useRef(null);

  let currentPath = useHistory().location.pathname;
  useEffect(() => {
    if (nav_link_list.current !== null) {
      for (const e of nav_link_list.current.children) {
        if (e.nodeName.toLowerCase() === "a") {
          e.children[0].classList.remove("active");
          if (e.getAttribute("href") === window.location.pathname) {
            e.children[0].classList.add("active");
          }
        }
      }
    }
  }, [currentPath])


  return (
    <div ref={sideNavBar} className="sideNavBar closed">
      <div className="close-nav-wrapper">
        <span onClick={() => { setIsNavOpen(false) }} className="material-icons icon-close-nav">
          close
        </span>
      </div>
      <ul ref={nav_link_list}>
        <Link onClick={() => { setIsNavOpen(false) }} to="/">
          <li className="side-nav-list-element">
            <span className="material-icons">home</span>
            <span>Ana səhifə</span>
          </li>
        </Link>
        <hr />
        <Link onClick={() => { setIsNavOpen(false) }} to="/questions">
          <li className="side-nav-list-element">
            <span className="material-icons">search</span>
            <span>Sorğular</span>
          </li>
        </Link>
        <hr />
        <Link onClick={() => { setIsNavOpen(false) }} to="/account">
          <li className="side-nav-list-element">
            <span className="material-icons">account_circle</span>
            <span>Hesaba daxil ol</span>
          </li>
        </Link>
        <hr />
        <Link onClick={() => { setIsNavOpen(false) }} to="/how_to">
          <li className="side-nav-list-element">
            <span className="material-icons">help</span>
            <span>İstifadə qaydaları</span>
          </li>
        </Link>
        <hr />
        <Link onClick={() => { setIsNavOpen(false) }} to="/about">
          <li className="side-nav-list-element">
            <span className="material-icons">info</span>
            <span>Haqqımızda</span>
          </li>
        </Link>
        <hr />
        <Link onClick={() => { setIsNavOpen(false) }} to="/project">
          <li className="about-web-project-link side-nav-list-element">
            <span className="material-icons">insights</span>
            <span>Layihə haqqında</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
