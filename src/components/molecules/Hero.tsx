import { IconArrowUpRight } from "@tabler/icons-react";
import { Static } from "../../assets/img";

export const Hero = () => {
  return (
    <>
      <div className="th-hero-wrapper hero-1" id="hero">
        <div
          className="swiper th-slider hero-slider-1"
          id="heroSlide1"
          data-slider-options='{"effect":"fade"}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="th-hero-bg" data-bg-src={Static.HeroBg11}>
                  <div
                    className="hero-shape-1"
                    data-ani="slideinleft"
                    data-ani-delay="0.7s"
                  >
                    <img src={Static.Overlay} alt="" />
                  </div>
                </div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      Empower Your Future With
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      Solar{" "}
                      <span className="hero-img">
                        <img src={Static.HeroShape} alt="" />
                      </span>
                      Power Energy
                    </h1>
                    <div
                      className="btn-group justify-content-lg-start justify-content-center"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a href="contact.html" className="th-btn style1 th-icon">
                        <span
                          className="btn-text"
                          data-back="Get A Quote"
                          data-front="Get A Quote"
                        ></span>
                        <IconArrowUpRight className="ms-2" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="th-hero-bg" data-bg-src={Static.HeroBg12}>
                  <div
                    className="hero-shape-1"
                    data-ani="slideinleft"
                    data-ani-delay="0.7s"
                  >
                    <img src={Static.Overlay} alt="" />
                  </div>
                </div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      Empower Your Future With
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      Powering{" "}
                      <span className="hero-img">
                        <img src={Static.HeroShape} alt="" />
                      </span>
                      Solar Energy
                    </h1>
                    <div
                      className="btn-group justify-content-lg-start justify-content-center"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a href="contact.html" className="th-btn style1 th-icon">
                        <span
                          className="btn-text"
                          data-back="Get A Quote"
                          data-front="Get A Quote"
                        ></span>
                        <IconArrowUpRight className="ms-2" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="th-hero-bg" data-bg-src={Static.HeroBg13}>
                  <div
                    className="hero-shape-1"
                    data-ani="slideinleft"
                    data-ani-delay="0.7s"
                  >
                    <img src={Static.Overlay} alt="" />
                  </div>
                </div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      Empower Your Future With
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      Harvesting{" "}
                      <span className="hero-img">
                        <img src={Static.HeroShape} alt="" />
                      </span>
                      Suns Power
                    </h1>
                    <div
                      className="btn-group justify-content-lg-start justify-content-center"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a href="contact.html" className="th-btn style1 th-icon">
                        <span
                          className="btn-text"
                          data-back="Get A Quote"
                          data-front="Get A Quote"
                        ></span>
                        <IconArrowUpRight className="ms-2" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div className="th-hero-bg" data-bg-src={Static.HeroBg14}>
                  <div
                    className="hero-shape-1"
                    data-ani="slideinleft"
                    data-ani-delay="0.7s"
                  >
                    <img src={Static.Overlay} alt="" />
                  </div>
                </div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      Empower Your Future With
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      Sun{" "}
                      <span className="hero-img">
                        <img src={Static.HeroShape} alt="" />
                      </span>
                      For Everyone
                    </h1>
                    <div
                      className="btn-group justify-content-lg-start justify-content-center"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a href="contact.html" className="th-btn style1 th-icon">
                        <span
                          className="btn-text"
                          data-back="Get A Quote"
                          data-front="Get A Quote"
                        ></span>
                        <IconArrowUpRight className="ms-2" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            data-slider-prev="#heroSlide"
            className="slider-arrow slider-prev"
          >
            <i className="far fa-arrow-left"></i>
          </button>{" "}
          <button
            data-slider-next="#heroSlide"
            className="slider-arrow slider-next"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-over-image">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-5 col-lg-4">
                <div className="hero-image global-img">
                  <img src={Static.HeroImg1} alt="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="hero1-item">
                  <div className="box-icon">
                    <img src={Static.DollarIcon} alt="" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">Cost Savings</h3>
                    <p className="box-text">
                      Over time, solar energy can significantly lower
                      electricity bills and, in some cases, allow users to sell
                      excess power back to the grid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="hero-image global-img">
                  <img src={Static.HeroImg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
