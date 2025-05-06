import { IconCarambola, IconCarambolaFilled } from "@tabler/icons-react";
import { Static } from "../../assets/img";

export const SectionM = () => {
  return (
    <>
      <section className="overflow-hidden bg-white space" id="testi-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title">Testimonials</span>
                <h2 className="sec-title">
                  What our clients say about our Solar services?
                </h2>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider testiSlide1 has-shadow"
              id="testiSlide1"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Reliable Solar Installation from Bina and Elina!
                    </h3>
                    <p className="box-text">
                      “The team arrived on time and got everything set up in a
                      day. We've had steady power ever since.”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi11} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Chinaza Okafor</h3>
                          <span className="box-desig">Homeowner, Enugu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Efficient and Professional Service
                    </h3>
                    <p className="box-text">
                      “Bina and Elina was transparent with pricing and did a
                      clean job. My generator is now a backup!”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi12} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Amina Bello</h3>
                          <span className="box-desig">Customer, Lagos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">Great Support and Follow-up</h3>
                    <p className="box-text">
                      “After installation, they still check in to make sure
                      everything works perfectly. That’s rare here.“
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi13} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Emeka Umeh </h3>
                          <span className="box-desig">SME Owner, Abuja</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Eco-friendly and Convenient Product!
                    </h3>
                    <p className="box-text">
                      “The switch to solar with Bina and Elina was one of my
                      best decisions. No regrets.”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi14} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Zainab Yusuf</h3>
                          <span className="box-desig">Customer, Oyo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">Affordable and Clean Energy!</h3>
                    <p className="box-text">
                      “I didn’t think solar could work this well in Nigeria.
                      Billing dropped and my home stays lit.”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi15} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Oghenetega Miracle</h3>
                          <span className="box-desig">Customer, Delta</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Smooth and Hassle-Free Process!
                    </h3>
                    <p className="box-text">
                      “The solar panel installation process was smooth and
                      hassle-free. The team was very professional and took care
                      of everything,”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi16} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">George Reece</h3>
                          <span className="box-desig">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Excellent Customer Service from Mentari!
                    </h3>
                    <p className="box-text">
                      “I was very impressed with the solar panel installation
                      process. The team was efficient, professional, and always
                      kept me informed .”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi17} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Olivia Samantha</h3>
                          <span className="box-desig">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Eco-friendly and Convenient Product!
                    </h3>
                    <p className="box-text">
                      “The solar panel installation process was smooth and
                      hassle-free. The team was very professional and took care
                      of everything,”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi18} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Michael Richard</h3>
                          <span className="box-desig">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Efficient and Professional Team!
                    </h3>
                    <p className="box-text">
                      “I was very impressed with the solar panel installation
                      process. The team was efficient, professional, and always
                      kept me informed.”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi19} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">James Charles</h3>
                          <span className="box-desig">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Smooth and Hassle-Free Process!
                    </h3>
                    <p className="box-text">
                      “The solar panel installation process was smooth and
                      hassle-free. The team was very professional and took care
                      of everything,”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi110} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Sophia Jennifer</h3>
                          <span className="box-desig">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Excellent Customer Service from Mentari!
                    </h3>
                    <p className="box-text">
                      “The customer service I received from the solar panel
                      company exceptional. They were always available to answer
                      my questions ”
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi111} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Isabella Victoria</h3>
                          <span className="box-desig">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <div className="box-review">
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <i className="fa-sharp">
                        <IconCarambolaFilled size={20} />
                      </i>
                      <span className="">
                        <i>
                          <IconCarambola size={20} />
                        </i>
                      </span>
                    </div>
                    <h3 className="box-title2">
                      Eco-friendly and Convenient Product!
                    </h3>
                    <p className="box-text">
                      “I wanted to switch to solar panels because I wanted to be
                      more eco-friendly and save money on my energy bills. This
                      company
                    </p>
                    <div className="box-wrapp">
                      <div className="box-profile">
                        <div className="box-author">
                          <img src={Static.Testi112} alt="Avater" />
                        </div>
                        <div className="box-info">
                          <h3 className="box-title">Alexander Joseph</h3>
                          <span className="box-desig">Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="slider-pagination"></div>
            </div>
            <button
              data-slider-prev="#testiSlide1"
              className="slider-arrow slider-prev"
            >
              <i className="far fa-arrow-left"></i>
            </button>
            <button
              data-slider-next="#testiSlide1"
              className="slider-arrow slider-next"
            >
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div
          className="shape-mockup d-none d-xl-block"
          data-top="0%"
          data-right="0%"
        >
          <img src="assets/img/shape/shape-1.png" alt="" />
        </div>
      </section>
    </>
  );
};
