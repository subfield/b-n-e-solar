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
                        Bina & Elina Development Ltd
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xxl-5 ms-xxl-5 me-xl-2">
                <p className="mb-20">
                  Bina & Elina Development SOLAR SYSTEMS combines the best from
                  grid-tied and off-grid solar systems. These systems can either
                  be described as off-grid solar with utility backup power, or
                  grid-tied solar with extra battery storage
                </p>
                <p className="mb-25">
                  Bina & Elina Development SOLAR SYSTEMS {">"} Service {">"}{" "}
                  URBAN & RURAL ELECTRIFICATION SOLAR ELECTRIFICATION FOR RURAL
                  COMMUNITIES
                </p>
                {about ? (
                  <>
                    TODAY, 1.4 BILLION PEOPLE IN THE WORLD DO NOT HAVE ACCESS TO
                    ENERGY. In Africa, only 8% of the population in rural areas
                    has access to mains electricity but mini-grids – localized
                    generation, transmission and distribution of power – could
                    change all that. These populations suffer from poor health,
                    social and economic development conditions whilst paying a
                    large part of their revenue for a harmful and polluting
                    energy. As the international expert in solar energy, Bina &
                    Elina Development SOLAR SYSTEMS provides most reliable,
                    affordable and clean energy for your community. In countries
                    where the energy infrastructure is under-developed and few
                    towns are adequately electrified, extending the grid is
                    often not financially viable, and certainly not likely to
                    happen in the short to medium term. As the cost of solar
                    energy in rural Africa, and other countries in Asia has
                    fallen dramatically in recent years, setting up a mini-grid
                    powered by renewable energy has become the cheapest way to
                    provide electricity. Bina & Elina Development SOLAR SYSTEMS
                    we specialize in providing complete off-grid electrification
                    (with optional back-up) to rural and undeveloped communities
                    in African and other Asian countries. Our off-grid solar
                    electrification projects provide an effective and renewable
                    energy source that meets the highest safety and design
                    specifications. We focus heavily on the sustainability of
                    our solar electrification systems – working together with
                    universities, NGOs, local government and, more especially,
                    involving the local communities and their leadership. It is
                    part of our vision to train and equip unskilled labour to
                    increase manufacture of our DC Micro-Grids in all rural and
                    disadvantaged areas throughout Africa and Asia, creating
                    sustainable employment and social development for as long as
                    the sun continues to shine.
                  </>
                ) : (
                  ""
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
