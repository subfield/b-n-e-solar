import {
  IconArrowUpRight,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import { Static } from "../../assets/img";

export const SectionD = () => {
  return (
    <>
      <section
        className="overflow-hidden space"
        data-bg-src={Static.ServiceBg1}
      >
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title">Our Services</span>
                <h2 className="sec-title">
                  Personalized Solar Solutions for Your Needs
                </h2>
              </div>
            </div>
            <div className="col-auto">
              <div className="sec-btn">
                <div className="icon-box">
                  <button
                    data-slider-prev="#serviceSlide"
                    className="slider-arrow default"
                  >
                    <i>
                      <IconChevronLeft size={18} />
                    </i>
                  </button>{" "}
                  <button
                    data-slider-next="#serviceSlide"
                    className="slider-arrow default"
                  >
                    <i>
                      <IconChevronRight size={18} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="serviceSlide"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src={Static.ServiceOverlay1}
                    ></div>
                    <div className="box-content">
                      <div className="box-icon">
                        <img src={Static.Service11} alt="Icon" />
                      </div>
                      <div className="box-img" data-mask-src={Static.SerShape}>
                        <img src={Static.Service10} alt="img" />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Solar Panel Installation
                        </a>
                      </h3>
                      <p className="box-text">
                        Our professional installation service ensures that your
                        solar panels are set up efficiently and securely for
                        maximum sunlight exposure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src={Static.ServiceOverlay2}
                    ></div>
                    <div className="box-content">
                      <div className="box-icon">
                        <img src={Static.ServicesS12} alt="Icon" />
                      </div>
                      <div className="box-img" data-mask-src={Static.SerShape}>
                        <img src={Static.Service12} alt="img" />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Battery Storage Solutions
                        </a>
                      </h3>
                      <p className="box-text">
                        Store solar power with our cutting-edge battery
                        solutions, providing energy independence and
                        uninterrupted power. Whether.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src={Static.ServiceOverlay3}
                    ></div>
                    <div className="box-content">
                      <div className="box-icon">
                        <img src={Static.ServicesS13} alt="Icon" />
                      </div>
                      <div className="box-img" data-mask-src={Static.SerShape}>
                        <img src={Static.Service13} alt="img" />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Solar Inverter Installation
                        </a>
                      </h3>
                      <p className="box-text">
                        Our professional installation service ensures that your
                        solar panels are set up efficiently and securely for
                        maximum sunlight exposure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src={Static.ServiceOverlay4}
                    ></div>
                    <div className="box-content">
                      <div className="box-icon">
                        <img src={Static.ServicesS14} alt="Icon" />
                      </div>
                      <div className="box-img" data-mask-src={Static.SerShape}>
                        <img src={Static.Service14} alt="img" />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Solar Maintenance & Repair
                        </a>
                      </h3>
                      <p className="box-text">
                        Store solar power with our cutting-edge battery
                        solutions, providing energy independence and
                        uninterrupted power. Whether.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src={Static.ServiceOverlay1}
                    ></div>
                    <div className="box-content">
                      <div className="box-icon">
                        <img src={Static.Service11} alt="Icon" />
                      </div>
                      <div className="box-img" data-mask-src={Static.SerShape}>
                        <img src={Static.Service11} alt="img" />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Solar Panel Installation
                        </a>
                      </h3>
                      <p className="box-text">
                        Our professional installation service ensures that your
                        solar panels are set up efficiently and securely for
                        maximum sunlight exposure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src={Static.ServiceOverlay2}
                    ></div>
                    <div className="box-content">
                      <div className="box-icon">
                        <img src={Static.ServicesS12} alt="Icon" />
                      </div>
                      <div className="box-img" data-mask-src={Static.SerShape}>
                        <img src={Static.Service13} alt="img" />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">Planning & Purchase</a>
                      </h3>
                      <p className="box-text">
                        With Bina & Elina Development SOLAR SYSTEMS as your
                        procurement partner, you’ll receive the best value and
                        quality for your investment. Thus, we provide the basis
                        for reliable energy production over 20 years and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src={Static.ServiceOverlay2}
                    ></div>
                    <div className="box-content">
                      <div className="box-icon">
                        <img src={Static.ServicesS12} alt="Icon" />
                      </div>
                      <div className="box-img" data-mask-src={Static.SerShape}>
                        <img src={Static.Service12} alt="img" />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Battery Storage Solutions
                        </a>
                      </h3>
                      <p className="box-text">
                        Store solar power with our cutting-edge battery
                        solutions, providing energy independence and
                        uninterrupted power. Whether.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
