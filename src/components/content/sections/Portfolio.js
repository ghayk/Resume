import React from "react";
export default function Portfolio() {
  return (
    <section
      data-id="portfolio"
      className="animated-section ps ps--active-y section-active ps--theme_default"
      data-ps-id="9be97665-3fc4-e43a-88ce-bdbad2e2cdeb"
    >
      <div className="page-title">
        <h2>Portfolio</h2>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="portfolio-content">
              <ul className="portfolio-filters">
                <li className="active">
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_all"
                  >
                    All
                  </a>
                </li>
                <li className="">
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_detailed"
                  >
                    Detailed
                  </a>
                </li>
                <li className="">
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_mockups"
                  >
                    Mockups
                  </a>
                </li>
                <li className="">
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_soundcloud"
                  >
                    SoundCloud
                  </a>
                </li>
                <li className="">
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_vimeo-videos"
                  >
                    Vimeo Videos
                  </a>
                </li>
                <li className="">
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_youtube-videos"
                  >
                    YouTube Videos
                  </a>
                </li>
              </ul>
              <div className="portfolio-flex three-columns shuffle">
                <div
                  className="item lbaudio shuffle-item filtered"
                  data-groups='["category_all", "category_soundcloud"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/1.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                      className="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                  </div>

                  <i className="fa fa-volume-up"></i>
                  <h4 className="name">SoundCloud Audio</h4>
                  <span className="category">SoundCloud</span>
                </div>
                <div
                  className="item standard shuffle-item filtered"
                  data-groups='["category_all", "category_detailed"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/2.jpg"
                      alt="Media Project 2"
                      title=""
                    />
                    <a href="portfolio-1.html" className="ajax-page-load"></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Detailed Project 2</h4>
                  <span className="category">Detailed</span>
                </div>
                <div
                  className="item lbvideo shuffle-item filtered"
                  data-groups='["category_all", "category_vimeo-videos"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/3.jpg"
                      alt="Vimeo Video 1"
                      title=""
                    />
                    <a
                      href="https://player.vimeo.com/video/158284739"
                      className="lightbox mfp-iframe"
                      title="Vimeo Video 1"
                    ></a>
                  </div>

                  <i className="fas fa-video"></i>
                  <h4 className="name">Vimeo Video 1</h4>
                  <span className="category">Vimeo Videos</span>
                </div>
                <div
                  className="item standard shuffle-item filtered"
                  data-groups='["category_all", "category_detailed"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/4.jpg"
                      alt="Media Project 1"
                      title=""
                    />
                    <a href="portfolio-1.html" className="ajax-page-load"></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Detailed Project 1</h4>
                  <span className="category">Detailed</span>
                </div>
                <div
                  className="item lbimage shuffle-item filtered"
                  data-groups='["category_all", "category_mockups"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/5.jpg"
                      alt="Mockup Design 1"
                      title=""
                    />
                    <a
                      className="lightbox"
                      title="Mockup Design 1"
                      href="img/portfolio/full/5.jpg"
                    ></a>
                  </div>

                  <i className="far fa-image"></i>
                  <h4 className="name">Mockup Design 1</h4>
                  <span className="category">Mockups</span>
                </div>
                <div
                  className="item lbvideo shuffle-item filtered"
                  data-groups='["category_all", "category_youtube-videos"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/6.jpg"
                      alt="YouTube Video 1"
                      title=""
                    />
                    <a
                      href="https://www.youtube.com/embed/bg0gv2YpIok"
                      className="lightbox mfp-iframe"
                      title="YouTube Video 1"
                    ></a>
                  </div>

                  <i className="fas fa-video"></i>
                  <h4 className="name">YouTube Video 1</h4>
                  <span className="category">YouTube Videos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
