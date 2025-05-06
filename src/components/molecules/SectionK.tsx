import { Static } from "../../assets/img";

export const SectionK = () => {
  return (
    <>
      <section className="space overflow-hidden position-relative space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-7">
              <div className="title-area text-center pe-xl-5 ps-xl-5">
                <span className="sub-title">Our Working Process</span>
                <h2 className="sec-title">
                  Work process in Solar Energy
                </h2>
              </div>
            </div>
          </div>
          <div className="step-wrap">
            <div className="process-card_wrapp">
              <div className="process-card">
                <div className="process-image">
                  <div className="box-img global-img">
                    <img src={Static.Process11} alt="Process" />
                  </div>
                  <span className="number">01</span>
                </div>
                <div className="box-content">
                  <h2 className="box-title">Consultation & Site Assessment</h2>
                  <p className="box-text">
                    We begin with an in-depth consultation to understand your
                    energy needs and goals. Our team then conducts.
                  </p>
                </div>
              </div>
              <div className="process-card">
                <div className="process-image">
                  <div className="box-img global-img">
                    <img src={Static.Process12} alt="Process" />
                  </div>
                  <span className="number">02</span>
                </div>
                <div className="box-content">
                  <h2 className="box-title">Custom System Design & Planning</h2>
                  <p className="box-text">
                    Custom system design and planning typically involves
                    creating tailored solutions to meet specific needs
                  </p>
                </div>
              </div>
              <div className="process-card">
                <div className="process-image">
                  <div className="box-img global-img">
                    <img src={Static.Process13} alt="Process" />
                  </div>
                  <span className="number">03</span>
                </div>
                <div className="box-content">
                  <h2 className="box-title">Professional Solar Installation</h2>
                  <p className="box-text">
                    Assess roof space, tilt, and orientation (for rooftop
                    installations). Evaluate ground space and shading
                  </p>
                </div>
              </div>
              <div className="process-card">
                <div className="process-image">
                  <div className="box-img global-img">
                    <img src={Static.Process14} alt="Process" />
                  </div>
                  <span className="number">04</span>
                </div>
                <div className="box-content">
                  <h2 className="box-title">Monitoring & Ongoing Support</h2>
                  <p className="box-text">
                    Effective monitoring and ongoing support are critical for
                    ensuring a solar energy systems optimal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
