import { Static } from "../../assets/img";

export const SectionH = () => {
  return (
    <>
      <div className="about-area space" id="about-sec">
        <div className="container">
          <div className="row gy-5 flex-row-reverse">
            <div className="col-xl-5">
              <div className="pe-xxl-4 me-xl-3">
                <div className="title-area mb-30">
                  <span className="sub-title">
                    Why Choose Bina & Elina Development Solar System
                  </span>
                  <h2 className="sec-title">
                    Our Solar Solutions Reach 100% Renewable
                  </h2>
                </div>
                {/* <p className="mt-n2 mb-35">
                  We offer flexible financing options and guidance on government
                  incentives and tax credits. Our team helps make solar energy
                  affordable for everyone, ensuring you get the best value and
                  maximize your investment in clean energy.
                </p> */}
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="box-icon">
                      <img src={Static.About11} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">Innovative Solution</h3>
                      <p className="box-text">
                        As a leading EPC contractor, we have earned a reputation
                        for designing and delivering the best solution for our
                        clients through innovative design.
                      </p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="box-icon">
                      <img src={Static.About12} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">Safety</h3>
                      <p className="box-text">
                        Signal Energy Constructors is committed to making safety
                        our primary focus and concern on each project.
                      </p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="box-icon">
                      <img src={Static.Service13} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">Commitment</h3>
                      <p className="box-text">
                        Bina & Elina Development SOLAR SYSTEMS believes in
                        fostering positive relationships with clients and
                        subcontractors that are built on trust, stewardship,
                        collaboration and accountability.
                      </p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="box-icon">
                      <img src={Static.Service12} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">Value and Ethics</h3>
                      <p className="box-text">
                        From employees to vendors to business partners, Bina &
                        Elina Development SOLAR SYSTEMS conducts business
                        fairly, impartially and ethically.
                      </p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="box-icon">
                      <img src={Static.Service10} alt="Icon" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">Quality</h3>
                      <p className="box-text">
                        Our goal is to be our customers’ preferred supplier into
                        each successive project. To reach our goal we must
                        deliver an excellent quality product, on time, every
                        time. Bina & Elina Development SOLAR SYSTEMS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 mb-30 mb-xl-0">
              <div className="img-box2 pe-xl-5 me-xl-2">
                <div className="img1 th-parallax">
                  <img src={Static.About12} alt="About" />
                </div>
                <div className="discount-wrapp style2">
                  <h2 className="box-counter">
                    <span className="counter-number">5</span>
                  </h2>
                  <div className="discount-tag">
                    <span className="discount-anime">
                      years of experience in solar enargy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
