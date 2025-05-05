import { IconClock, IconMapPin, IconMail } from "@tabler/icons-react";
import { Static } from "../../assets/img";
import { Facebook, X, LinkedIn, Instagram, YouTube } from "../atoms/socials";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      {/* <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="home-solar-energy_2.html">
              <img src="assets/img/logo_2.svg" alt="Solak " />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <a href="home-solar-energy_2.html">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="home-solar-energy_2.html">Home Solar Energy</a>
                  </li>
                  <li>
                    <a href="home-renewable-energy.html">
                      Home Renewable Energy
                    </a>
                  </li>
                  <li>
                    <a href="home-wind-energy.html">Home Wind Energy</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li className="menu-item-has-children">
                <a href="index.html#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="appointment.html">Appointment</a>
                  </li>
                  <li>
                    <a href="pricing.html">Price Table</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonial</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index.html#">Service</a>
                <ul className="sub-menu">
                  <li>
                    <a href="service.html">Services - Style 1</a>
                  </li>
                  <li>
                    <a href="service-2.html">Services - Style 2</a>
                  </li>
                  <li>
                    <a href="service-3.html">Services - Style 3</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index.html#">Project</a>
                <ul className="sub-menu">
                  <li>
                    <a href="project.html">Project Style 1</a>
                  </li>
                  <li>
                    <a href="project-2.html">Project Style 2</a>
                  </li>
                  <li>
                    <a href="project-3.html">Project Style 3</a>
                  </li>
                  <li>
                    <a href="project-4.html">Project Style 4</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="index.html#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details_2.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <header className="th-header header-layout1 !m-0 !p-0">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-md-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <div
                        style={{
                          display: "flex",
                          gap: "0.25rem",
                          alignItems: "center",
                          color: "#FFB30F",
                        }}
                      >
                        <IconClock className="pr-3" size={16} />
                        <span>
                          Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00
                        </span>
                      </div>
                    </li>
                    <li className="">
                      <div
                        style={{
                          display: "flex",
                          gap: "0.25rem",
                          alignItems: "center",
                          color: "#FFB30F",
                        }}
                      >
                        <IconMapPin className="" size={16} />
                        <span>12 Division Park, SKY 12546. Berlin</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.25rem",
                          alignItems: "center",
                          color: "#FFB30F",
                        }}
                      >
                        <IconMail className="" size={16} />
                        <a href="mailto:help@solak.com">help@solak.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="social-links">
                  <span className="social-title">Follow Us On:</span>{" "}
                  <a href="https://www.facebook.com/">
                    <Facebook />
                  </a>{" "}
                  <a href="https://x.com/">
                    <X />
                  </a>{" "}
                  <a href="https://www.linkedin.com/">
                    <LinkedIn />
                  </a>{" "}
                  <a href="https://www.instagram.com/">
                    <Instagram />
                  </a>{" "}
                  <a href="https://www.youtube.com/">
                    <YouTube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container-fiuld">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      {/* <img
                        className="!w-3 !h-3"
                        src={Static.Logo}
                        alt="Bina & Elina Development Solar"
                      /> */}
                    </a>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu style2 d-none d-lg-inline-block">
                    <ul>
                      <li className="">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="">
                        <a href="index.html#">Service</a>
                      </li>
                      <li className="">
                        <a href="index.html#">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  {/* <div className="header-button">
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div> */}
                </div>
                {/* <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button type="button" className="icon-btn searchBoxToggler">
                      <i className="far fa-search"></i>
                    </button>{" "}
                    <a
                      href="index.html#"
                      className="icon-btn sideMenuToggler d-none d-lg-block"
                    >
                      <img src="assets/img/icon/grid.svg" alt="" />
                    </a>
                    <a href="tel:+25862323258" className="th-btn th-icon">
                      <span
                        className="btn-text"
                        data-back="Call For Help Us: +258 6232 3258 "
                        data-front="Call For Help Us: +258 6232 3258"
                      ></span>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="logo-bg" data-mask-src={Static.LogoMask}></div>
          </div>
        </div>
      </header>
    </>
  );
};
