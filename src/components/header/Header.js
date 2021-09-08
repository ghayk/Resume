import mainPhoto from "../../img/main_photo.jpg";

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
      <div className="main-menu"></div>
      <div className="social-links"></div>
      <div className="header-buttons"></div>
      <div className="copyrights">© 2020 All rights reserved.</div>
    </div>
  );
}
