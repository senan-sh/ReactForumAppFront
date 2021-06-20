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
//React-Router
import { Switch, Route, HashRouter } from "react-router-dom";
import Error404 from "./Components/404Page.js/Error404";
import React, { useEffect, useRef } from "react";

export default function App() {
  let isNavOpen = false;
  //Functions
  const progressBarFunctions = {
    runProgressBarAnimation: () => {
      document.getElementById("up-progress-bar").classList.add("animating");
    },
    stopProgressBarAnimation: () => {
      document.getElementById("up-progress-bar").classList.remove("animating");
    },
  };
  const navBarFunctions = {
    closeSideNavBar: () => {
      if (isNavOpen) {
        document.getElementsByClassName("sideNavBar")[0].classList.add("closed");
        document.getElementsByClassName("black-overlay")[0].classList.remove("active");
      }
      isNavOpen = false;
    },
    openSideNavBar: () => {
      if (!isNavOpen) {
        document.getElementsByClassName("sideNavBar")[0].classList.remove("closed");
        document.getElementsByClassName("black-overlay")[0].classList.add("active");
        isNavOpen = true;
      }
    },
  };
  const passedData = { progressBarFunctions, navBarFunctions }

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
  const changeToToBtnLogically = () => {
    if (document.documentElement.scrollTop > 100) {
      changeDisplayOfToTopBtn(true)
    } else {
      changeDisplayOfToTopBtn(false)
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
      changeToToBtnLogically();
    })
  }, [])

  useEffect(() => {
    changeToToBtnLogically();
  }, [])

  return (
    <React.StrictMode >
      <HashRouter >
        <div onClick={navBarFunctions.closeSideNavBar} className="black-overlay"></div>
        <UpBar functions={(progressBarFunctions, navBarFunctions)} />
        <SideNavBar functions={(progressBarFunctions, navBarFunctions)} />
        <button ref={to_top_btn} onClick={goToPageTop} id="go_to_top">
          <span class="material-icons-outlined">arrow_upward</span>
        </button>
        <Switch>
          <Route
            path="/about"
            render={() => {
              return <About functions={passedData} />;
            }}
          />
          <Route
            path="/how_to"
            render={() => {
              return <HowTo functions={passedData} />;
            }}
          />
          <Route
            path="/questions"
            render={() => {
              return <Questions functions={passedData} />;
            }}
          />
          <Route
            path="/account"
            render={() => {
              return <Authorization functions={passedData} />;
            }}
          />
          <Route
            path="/" exact
            render={() => {
              return <HomePage functions={passedData} />;
            }}
          />
          <Route
            path="/"
            render={() => {
              return <Error404 functions={{ navBarFunctions, progressBarFunctions }} />;
            }}
          />
        </Switch>
        <Footer />
      </HashRouter>
    </React.StrictMode>
  );
}
