import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function Content() {
  const sections = [
    { path: "/", comp: Home },
    { path: "/about-me", comp: AboutMe },
    { path: "/resume", comp: Resume },
    { path: "/portfolio", comp: Portfolio },
    { path: "/blog", comp: Blog },
    { path: "/contact", comp: Contact },
  ];
  return (
    <div className="content-area">
      <div className="animated-sections">
        <Switch>
          {sections.map((item, index) => {
            return (
              <Route key={index} exact path={item.path} component={item.comp} />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}
