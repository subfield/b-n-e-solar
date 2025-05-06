import { Header } from "../components/molecules/Header";
import { Static } from "../assets/img";
import { Link } from "react-router-dom";
import { Footer } from "../components/molecules/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="breadcumb-wrapper" data-bg-src={Static.BreadcumbBg}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Page</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">
              <i>Coming Soon</i>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
