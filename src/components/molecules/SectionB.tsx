import {
  IconArrowUpRight,
  IconPlayerPlayFilled,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { Static } from "../../assets/img";

export const SectionB = () => {
  return (
    <>
      <div className="about-area overflow-hidden space-top" id="about-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7">
              <div className="title-area mb-40 text-center">
                <span className="sub-title">
                  Solak - Solar & Renewable Energy
                </span>
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
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i>
                        <IconPlayerPlayFilled size={38} />
                      </i>
                    </a>
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
                <p className="mb-25">
                  Solar EPC is particularly well-suited to large-scale solar
                  installations, such as commercial and industrial projects. For
                  companies like BINA & ELINA DEVELOPMENT LTD ( BEDL ), managing
                  and delivering extensive solar projects requires a coordinated
                  and efficient approach. The EPC model provides this by
                  consolidating all necessary services into a cohesive process,
                  allowing large projects to proceed smoothly and reliably.
                </p>
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
                  <a href="contact.html" className="th-btn black-btn th-icon">
                    <span
                      className="btn-text"
                      data-back="More About Us"
                      data-front="More About Us"
                    ></span>
                    <i>
                      <IconArrowUpRight className="ms-2" size={16} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
