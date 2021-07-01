//Styles
import "./style/App.css";
import "./style/Media.css";
//Components
import UpBar from "./Components/Shared/UpBar";
import SideNavBar from "./Components/Shared/SideNavBar";
import Footer from "./Components/Shared/Footer";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import HowTo from "./Components/Guide/HowTo";
import Questions from "./Components/Questions/Questions";
import Authorization from './Components/Authorization/Authorization'
import AboutWebProject from './Components/About Project/AboutWebProject'
//React-Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Error404 from "./Components/404Page.js/Error404";
import { useEffect, useRef, useState } from "react";

export default function App() {


  // NavBarVisibility
  const [isNavOpen, setIsNavOpen] = useState(false)
  const black_overlay = useRef(null);
  useEffect(() => {
    if (isNavOpen) {
      black_overlay.current.classList.add("active");
    } else {
      black_overlay.current.classList.remove("active");
    }
  }, [isNavOpen])
  // GoToTopFunction
  const goToPageTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const to_top_btn = useRef(null)
  const changeDisplayOfToTopBtn = (show_boolean) => {
    if (show_boolean === true) {
      to_top_btn.current.style.opacity = "1"
      to_top_btn.current.style.transform = "scale(1)"
    } else {
      to_top_btn.current.style.opacity = "0"
      to_top_btn.current.style.transform = "scale(0)"
    }

  }
  const changeToToBtnLogically = (scroll_top) => {
    if (scroll_top > 100) {
      changeDisplayOfToTopBtn(true)
    } else {
      changeDisplayOfToTopBtn(false)
    }
  }
  let upBarShowing = true;
  let scroll_position_y = 0
  const changeUpBarVisibility = (show) => {
    const up_bar = document.getElementsByClassName("upBar")[0];
    if (show === true) {
      if (upBarShowing === false) {
        up_bar.style.transform = "translateY(0)"
        upBarShowing = true;
      }
    } else {
      if (upBarShowing === true) {
        up_bar.style.transform = "translateY(-100%)"
        upBarShowing = false;
      }

    }

  }
  useEffect(() => {
    // only once
    changeToToBtnLogically(false);

    document.onscroll = () => {
      //^ to top Button
      const scroll_top = document.documentElement.scrollTop;
      if (to_top_btn !== null) {
        changeToToBtnLogically(scroll_top);
      }

      if (scroll_top > scroll_position_y) {
        if (scroll_top > 100) {
          changeUpBarVisibility(false)
        }
        scroll_position_y = scroll_top
      } else {
        changeUpBarVisibility(true)
        scroll_position_y = scroll_top
      }
    }
  }, [])

  const [activePage, setActivePage] = useState("home")
  // Change title
  useEffect(() => {
    switch (activePage) {
      case "home":
        document.title = "Ana səhifə"
        break;
      case "about":
        document.title = "Haqqımızda"
        break;
      case "questions":
        document.title = "Sorğular"
        break;
      case "about_project":
        document.title = "Layihə haqqında"
        break;
      case "guide":
        document.title = "İstifadəyə göstəriş"
        break;
      case "authorization":
        document.title = "Hesaba daxil ol"
        break;
      case "404":
        document.title = "Xəta"
        break;
    }
  }, [activePage])

  return (
    <BrowserRouter>
      <div ref={black_overlay} onClick={() => { setIsNavOpen(false) }} className="black-overlay"></div>
      <UpBar data={{ setIsNavOpen }} />
      <SideNavBar data={{ isNavOpen, setIsNavOpen, activePage }} />
      <button ref={to_top_btn} onClick={goToPageTop} id="go_to_top">
        <span className="material-icons-outlined">arrow_upward</span>
      </button>
      <Switch>
        <Route
          path="/about"
          render={() => {
            return <About data={{ setActivePage }} />;
          }}
        />
        <Route
          path="/how_to"
          render={() => {
            return <HowTo data={{ setActivePage }} />;
          }}
        />
        <Route
          path="/questions"
          render={() => {
            return <Questions data={{ setActivePage }} />;
          }}
        />
        <Route
          path="/account"
          render={() => {
            return <Authorization data={{ setActivePage }} />;
          }}
        />
        <Route
          path="/" exact
          render={() => {
            return <HomePage data={{ setActivePage }} />;
          }}
        />
        <Route
          path="/project" exact
          render={() => {
            return <AboutWebProject data={{ setActivePage }} />;
          }}
        />
        <Route
          path="/"
          render={() => {
            return <Error404 data={{ setActivePage }} />;
          }}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
