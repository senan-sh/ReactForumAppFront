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

  // useEffect(() => {
  //   changeToToBtnLogically(document.documentElement.scrollTop);
  // }, [])

  return (
      <BrowserRouter>
        <div onClick={navBarFunctions.closeSideNavBar} className="black-overlay"></div>
        <UpBar functions={(progressBarFunctions, navBarFunctions)} />
        <SideNavBar functions={(progressBarFunctions, navBarFunctions)} />
        <button ref={to_top_btn} onClick={goToPageTop} id="go_to_top">
          <span className="material-icons-outlined">arrow_upward</span>
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
            path="/project" exact
            render={() => {
              return <AboutWebProject functions={passedData} />;
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
      </BrowserRouter>
  );
}
