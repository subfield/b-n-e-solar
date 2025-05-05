import { Header } from "../components/molecules/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="home-solar-energy_2.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
