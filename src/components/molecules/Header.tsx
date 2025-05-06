import { useState } from "react";
import {
  IconClock,
  IconMapPin,
  IconMail,
  IconMenuDeep,
  IconX,
} from "@tabler/icons-react";
import { Static } from "../../assets/img";
import { Facebook, X, LinkedIn, Instagram, YouTube } from "../atoms/socials";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <div
          className={`${
            open ? "th-menu-wrapper th-body-visible" : "th-menu-wrapper"
          }`}
        >
          <div className="th-menu-area text-center">
            <button
              className="th-menu-toggle"
              style={{ zIndex: 50 }}
              onClick={() => setOpen(false)}
            >
              <i className="">
                <IconX size={26} />
              </i>
            </button>
            <div className="mobile-logo">
              <Link to="/">
                <img
                  src={Static.Logo}
                  style={{ width: "75%", height: "50%" }}
                  alt="Bina & Elina Development Solar"
                />
              </Link>
            </div>
            <div className="th-mobile-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <header className="th-header header-layout1">
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
                          Mon - Fri 8:00 - 18:00
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
                        <span>
                          Awani Road By Ibori Golf Club. Asaba, Delta State.
                        </span>
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
                        <a href="mailto:binasolar-epc@binaelina-solar-epc.com">binasolar-epc@binaelina-solar-epc.com</a>
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
                    <Link to="/">
                      <img
                        style={{
                          paddingTop: "19px",
                          paddingBottom: "1px",
                        }}
                        className=""
                        src={Static.Logo}
                        alt="Bina & Elina Development Solar"
                      />
                    </Link>
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
                        <Link to="/service">Service</Link>
                      </li>
                      <li className="">
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-button" onClick={toggleMenu}>
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="">
                        <IconMenuDeep size={28} />
                      </i>
                    </button>
                  </div>
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
