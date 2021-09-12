import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function Content() {
  const sections = [
    { path: "/", Component: Home },
    { path: "/about-me", Component: AboutMe },
    { path: "/resume", Component: Resume },
    { path: "/portfolio", Component: Portfolio },
    { path: "/blog", Component: Blog },
    { path: "/contact", Component: Contact },
  ];
  return (
    <div className="content-area">
      <div className="animated-sections">
        <TransitionGroup>
          <Switch>
            {sections.map(({ path, Component }) => {
              return (
                <Route key={path} exact path={path}>
                  <CSSTransition
                    timeout={2000}
                    classNames="CSSTransition"
                    unmountOnExit
                    in
                  >
                    <Component />
                  </CSSTransition>
                </Route>
              );
            })}
            <Redirect to="/" />
          </Switch>
        </TransitionGroup>
      </div>
    </div>
  );
}
