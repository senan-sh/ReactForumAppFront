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
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Error404 from "./Components/404Page.js/Error404";
import React from "react";

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

  const passedData = {progressBarFunctions,navBarFunctions}

  return (
    <React.StrictMode >
      <BrowserRouter >
        <div onClick={navBarFunctions.closeSideNavBar} className="black-overlay"></div>
        <UpBar functions={(progressBarFunctions, navBarFunctions)} />
        <SideNavBar functions={(progressBarFunctions, navBarFunctions)} />

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
      </BrowserRouter>
      </React.StrictMode>
  );
}
