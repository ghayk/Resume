import React from "react";
export default function Resume() {
  const arrDesignSkills = [
    { name: "Web Design", percent: 95 },
    { name: "Print Design", percent: 65 },
    { name: "Logo Design", percent: 80 },
    { name: "Graphic Design", percent: 90 },
  ];
  const arrCodingSkills = [
    { name: "JavaScript", percent: 95 },
    { name: "PHP", percent: 85 },
    { name: "HTML/CSS", percent: 100 },
    { name: "Smarty/Twig", percent: 75 },
    { name: "Perl", percent: 90 },
  ];
  return (
    <section className="animated-section section-active ps--theme_default ps--active-y">
      <div className="page-title">
        <h2>Resume</h2>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <div className="block-title">
              <h3>Education</h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2008</h5>
                  <span className="item-company">University of Studies</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Frontend Development</h4>
                  <p>
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit,
                    laoreet sem in, lobortis ante.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2007</h5>
                  <span className="item-company">University of Studies</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Graphic Design</h4>
                  <p>
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                    turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                    fringilla mollis risus, eu pulvinar dolor.
                  </p>
                </div>
              </div>
            </div>

            <div className="white-space-50"></div>

            <div className="block-title">
              <h3>Experience</h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2016 - Current</h5>
                  <span className="item-company">Google</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Lead Ui/Ux Designer</h4>
                  <p>
                    Praesent dignissim sollicitudin justo, sed elementum quam
                    lacinia quis. Phasellus eleifend tristique posuere. Sed
                    vitae dui nec magna.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2013 - 2016</h5>
                  <span className="item-company">Adobe</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Senior Ui/Ux Designer</h4>
                  <p>
                    Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                    vitae nulla tristique, ornare felis id, congue libero. Nam
                    volutpat euismod quam.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2011 - 2013</h5>
                  <span className="item-company">Google</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Junior Ui/Ux Designer</h4>
                  <p>
                    Duis mollis nunc quis quam viverra venenatis. Nulla nulla
                    arcu, congue vitae nunc ac, sodales ultricies diam. Nullam
                    justo leo, tincidunt sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="block-title">
              <h3>
                Design <span>Skills</span>
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              {arrDesignSkills.map(({ name, percent }) => {
                return (
                  <div key={name}>
                    <div className="skill clearfix">
                      <h4>{name}</h4>
                      <div className="skill-value">{`${percent}%`}</div>
                    </div>
                    <div className="skill-container">
                      <div
                        style={{ width: `${percent}%` }}
                        className="skill-percentage"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>
                Coding <span>Skills</span>
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              {arrCodingSkills.map(({ name, percent }) => {
                return (
                  <div key={name}>
                    <div className="skill clearfix">
                      <h4>{name}</h4>
                      <div className="skill-value">{`${percent}%`}</div>
                    </div>
                    <div className="skill-container">
                      <div
                        style={{ width: `${percent}%` }}
                        className="skill-percentage"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>Knowledges</h3>
            </div>

            <ul className="knowledges">
              <li>Marketing</li>
              <li>Print</li>
              <li>Digital Design</li>
              <li>Social Media</li>
              <li>Time Management</li>
              <li>Communication</li>
              <li>Problem-Solving</li>
              <li>Social Networking</li>
              <li>Flexibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
