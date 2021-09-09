import mainPhoto from "../../img/main_photo.jpg";
const menuArr = [
  { aHref: "#home", span1Class: "home", span2Inner: "Home" },
  { aHref: "#about-me", span1Class: "user", span2Inner: "About me" },
  { aHref: "#resume", span1Class: "graduation-hat", span2Inner: "Resume" },
  { aHref: "#portfolio", span1Class: "briefcase", span2Inner: "Portfolio" },
  { aHref: "#blog", span1Class: "book", span2Inner: "Blog" },
  { aHref: "#contact", span1Class: "envelope", span2Inner: "Contact" },
];
export default function Header() {
  return (
    <div id="site_header" className="header mobile-menu-hide">
      <div className="header-content">
        <div className="header-photo">
          <img src={mainPhoto} alt="Alex Smith" />
        </div>
        <div className="header-titles">
          <h2>Hayk Grigoryan</h2>
          <h4>Web Developer</h4>
        </div>
      </div>
      <ul className="main-menu">
        {menuArr.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.aHref} className="nav-anim">
                <span className={`menu-icon lnr lnr-${item.span1Class}`}></span>
                <span className="link-text">{item.span2Inner}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="social-links">
        <ul>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="header-buttons">
        <a href="#" target="_blank" className="btn btn-primary">
          Download CV
        </a>
      </div>
      <div className="copyrights">© 2021 All rights reserved.</div>
    </div>
  );
}
