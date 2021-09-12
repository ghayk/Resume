import React from "react";
export default function AboutMe() {
  return (
    <section className="animated-section section-active ps--theme_default ps--active-y">
      <div className="page-title">
        <h2>
          Aboute
          <span> Me</span>
        </h2>
      </div>
      <div className="section-content">
        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-xs-12 col-sm-7">
            <p>
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
              elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
              justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
              hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
              condimentum dictum et vel massa. Ut in imperdiet dolor, vel
              consectetur dui.
            </p>
          </div>
          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Age</span>
                  <span className="value">27</span>
                </li>
                <li>
                  <span className="title">Residence</span>
                  <span className="value">Armenia</span>
                </li>
                <li>
                  <span className="title">Address</span>
                  <span className="value">Kapan</span>
                </li>
                <li>
                  <span className="title">email</span>
                  <span className="value">haykg45@gmail.com</span>
                </li>
                <li>
                  <span className="title">Phone</span>
                  <span className="value">+374 77 47 57 16</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                What <span> I Do</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-store"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-laptop-phone"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Web Design</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-pencil"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Copywriting</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-flag"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Management</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
