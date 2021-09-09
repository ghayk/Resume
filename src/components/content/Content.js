import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Home";
import Blog from "./sections/Blog";
import Contact from "./sections/Cotact";

export default function Content() {
  return (
    <div className="content-area">
      <div className="animated-sections">
        <Home />
      </div>
    </div>
  );
}
