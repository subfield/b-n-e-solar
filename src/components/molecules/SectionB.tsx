import {
  IconArrowUpRight,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { Static } from "../../assets/img";
import { Link } from "react-router-dom";

export const SectionB = ({ about }: { about: boolean }) => {
  return (
    <>
      <div className="about-area overflow-hidden space-top" id="about-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7">
              <div className="title-area mb-40 text-center">
                <span className="sub-title">BINA AND ELINA SOLAR EPC</span>
                <h2 className="sec-title">
                  We Strive To Lead The way In The Solar Energy Industry.
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-center">
            <div className="col-xl-7 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1 th-parallax">
                  <img src={Static.About11} alt="About" />
                </div>
                <div className="about-wrapp">
                  <div className="discount-wrapp">
                    <span className="play-btn popup-video">
                      <i>{/* <IconPlayerPlayFilled size={38} /> */}</i>
                    </span>
                    <div className="discount-tag">
                      <span className="discount-anime">
                        BINA AND ELINA SOLAR EPC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xxl-5 ms-xxl-5 me-xl-2">
                {about ? (
                  <>
                    <p className="mb-20">
                      At Bina & Elina Development SOLAR SYSTEMS is a premier
                      energy services contractor specializing in innovative,
                      cost-effective solutions with an unwavering commitment to
                      safety and quality while striving to remain within
                      budgetary limits. Opting for a partnership with At Bina &
                      Elina Development SOLAR SYSTEMS opens the door to a
                      cohesive team dedicated to realizing your project’s
                      objectives. Our comprehensive suite of services spans
                      diverse areas, encompassing substation design and
                      construction, meticulous medium and low voltage splicing
                      and testing, intricate collection system work, seamless
                      switching solutions, seamless battery storage
                      installations, and an extensive array of intermediate
                      tasks. Our journey has been intertwined with the evolution
                      of the renewable energy landscape, equipping us with
                      unparalleled expertise in renewable technologies. The
                      breadth of our adaptable project history attests to the
                      fact that, regardless of the project’s context, At Bina &
                      Elina Development SOLAR SYSTEMS proficient specialists
                      possess the acumen to steer you toward fulfilling your
                      energy aspirations. For a deeper insight into optimizing
                      your energy project, do not hesitate to reach out to us;
                      we are here to guide you every step of the way.
                      CAPABILITIES INCLUDE: Instillation solar EV Charging
                      System MV LV Splicing & Testing Collection System Work
                      Battery Storage Substation Design and Buildout Solar
                      Installation & Testing AC/DC OEM Trained Technicians
                      Design Modification
                    </p>
                    <p className="mb-25">
                      Expertise We love what we do. At Bina & Elina Development
                      SOLAR SYSTEMS our involvement in the development, design
                      and installation of renewable energy projects is not just
                      a job, it’s our life’s work. We do this because we are
                      passionate about our future and the future of generations
                      to come. Bina & Elina Development SOLAR SYSTEMS fully
                      committed to a safe and sustainable environment and our
                      focus on sustainable, cost effective renewable energy
                      projects is reflected in everything we do.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-20">
                      Bina & Elina Development SOLAR SYSTEMS combines the best
                      from grid-tied and off-grid solar systems. These systems
                      can either be described as off-grid solar with utility
                      backup power, or grid-tied solar with extra battery
                      storage
                    </p>
                    <p className="mb-25">
                      Bina & Elina Development SOLAR SYSTEMS {">"} Service {">"}{" "}
                      URBAN & RURAL ELECTRIFICATION SOLAR ELECTRIFICATION FOR
                      RURAL COMMUNITIES
                    </p>
                  </>
                )}
                <div className="checklist list-two-column mb-20">
                  <ul>
                    <li>
                      <i>
                        <IconRosetteDiscountCheckFilled size={26} />
                      </i>
                      Clean and Renewable
                    </li>
                    <li>
                      <i>
                        <IconRosetteDiscountCheckFilled size={26} />
                      </i>
                      Energy Independence
                    </li>
                    <li>
                      <i>
                        <IconRosetteDiscountCheckFilled size={26} />
                      </i>
                      Low Maintenance
                    </li>
                    <li>
                      <i>
                        <IconRosetteDiscountCheckFilled size={26} />
                      </i>
                      Solar Scalability
                    </li>
                  </ul>
                </div>
                {/* <div className="about-profile">
                  <div className="signature">
                    <img src={Static.Signature} alt="signature" />
                  </div>
                  <h3 className="box-title">Alines Jannie</h3>
                  <p className="box-text">Director of Renewable Group</p>
                </div> */}
                <div className="btn-group mt-30 justify-content-start">
                  <Link to="/service" className="th-btn black-btn th-icon">
                    <span
                      className="btn-text"
                      data-back="More About Us"
                      data-front="More About Us"
                    ></span>
                    <i>
                      <IconArrowUpRight className="ms-2" size={16} />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
