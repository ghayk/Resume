import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import { useState } from "react";

export default function Content() {
  const sections = [
    { path: "/", Component: Home },
    { path: "/about-me", Component: AboutMe },
    { path: "/resume", Component: Resume },
    { path: "/portfolio", Component: Portfolio },
    { path: "/blog", Component: Blog },
    { path: "/contact", Component: Contact },
  ];
  const [x, setX] = useState(true);
  return (
    <div className="content-area">
      <div className="animated-sections">
        <button
          style={{
            position: "absolute",
            top: "-60px",
            backgroundColor: "#078",
          }}
          onClick={() => setX(!x)}
        >
          click
        </button>
        <Switch>
          {sections.map(({ path, Component }) => {
            return (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    timeout={2000}
                    classNames="CSSTransition"
                    unmountOnExit
                    in={match != null}
                  >
                    <Component />
                  </CSSTransition>
                )}
              </Route>
            );
          })}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}
