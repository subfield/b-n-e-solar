import { Header } from "../components/molecules/Header";
import { Static } from "../assets/img";
import { Link } from "react-router-dom";
import { SectionM } from "../components/molecules/SectionM";
import { SectionO } from "../components/molecules/SectionO";
import { IconPhone, IconClock, IconMapPin } from "@tabler/icons-react";
import { Footer } from "../components/molecules/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="breadcumb-wrapper" data-bg-src={Static.BreadcumbBg}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">Our Contact Information</h2>
          </div>
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-media">
                <div className="icon-btn">
                  <i className="">
                    <IconMapPin />
                  </i>
                </div>
                <div className="media-body">
                  <h5 className="box-title">Our Address</h5>
                  <p className="box-text">
                    Awani Road, By Ibori Golf Club, Asaba, Delta State.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-media">
                <div className="icon-btn">
                  <i className="">
                    <IconPhone />
                  </i>
                </div>
                <div className="media-body">
                  <h5 className="box-title">Contact Number</h5>
                  <p className="box-text">
                    <a href="tel:+2347067274013">Mobile: +2347067274013</a>{" "}
                    <a href="mailto:help@solak.com">Email: help@solak.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-media">
                <div className="icon-btn">
                  <i className="">
                    <IconClock />
                  </i>
                </div>
                <div className="media-body">
                  <h5 className="box-title">Opening Hour</h5>
                  <p className="box-text">
                    Monday - Saturday: 9:00 - 18:00 Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionO />
      <SectionM />
      <Footer />
    </>
  );
};

export default ContactPage;
