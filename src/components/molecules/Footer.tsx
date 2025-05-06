import { IconCopyright, IconMapPin, IconPhone } from "@tabler/icons-react";
import { Facebook, X, LinkedIn, WhatsApp } from "../atoms/socials";
import { Static } from "../../assets/img";

export const Footer = () => {
  return (
    <>
      <footer
        className="footer-wrapper bg-title footer-layout1"
        data-bg-src="assets/img/bg/dot-shape.png"
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a className="" href="index.html">
                        <img
                          src={Static.Logo}
                          alt="Bina & Elina Development Solar"
                        />
                      </a>
                    </div>
                    <p className="about-text">
                      Solar energy is renewable and inexhaustible, making it a
                      sustainable solution for meeting energy demands. energy
                      usage to design the ideal solar solution for your
                      property.
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <Facebook />
                      </a>{" "}
                      <a href="https://x.com/">
                        <X />
                      </a>{" "}
                      <a href="https://www.linkedin.com/">
                        <LinkedIn />
                      </a>{" "}
                      <a href="https://www.whatsapp.com/">
                        <WhatsApp />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="service.html">Services</a>
                      </li>
                      <li>
                        <a href="project.html">projects</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Our Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="service.html">Renewable Energy</a>
                      </li>
                      <li>
                        <a href="service.html">Wind Generator</a>
                      </li>
                      <li>
                        <a href="service.html">Solar Energy</a>
                      </li>
                      <li>
                        <a href="service.html">Hydropower Energy</a>
                      </li>
                      <li>
                        <a href="service.html">Eco Maintenance</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="th-widget-about">
                    <h4 className="footer-info-title">Address Location</h4>
                    <p className="footer-info">
                      <i>
                        <IconMapPin size={16} />
                      </i>
                      Awani Road, <br /> By Ibori Golf Club, <br /> Asaba, Delta
                      State.
                    </p>
                    <h4 className="footer-info-title">Phone Number</h4>
                    <p className="footer-info">
                      <i>
                        <IconPhone size={16} />
                      </i>
                      <span>
                        <a className="text-inherit" href="tel:+2347067274013">
                          +2347067274013
                        </a>
                      </span>
                    </p>
                    {/* <h4 className="footer-info-title">Email address</h4> */}
                    {/* <p className="footer-info">
                      <i>
                        <IconMail size={16} />
                      </i>
                      <span>
                        {" "}
                        <a
                          className="text-inherit"
                          href="mailto:info@solak.com"
                        >
                          info@solak.com
                        </a>
                      </span>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap text-center">
          <p className="copyright-text">
            Copyright{" "}
            <i>
              <IconCopyright />
            </i>{" "}
            2025 <a href="#">BINA AND ELINA SOLAR EPC </a>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
