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
            <h1 className="breadcumb-title">Services Page</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
      <section
        className="z-index-common space overflow-hidden"
        id="service-sec"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-xxl-5">
              <div className="title-area text-center">
                <span className="sub-title sub-title3">Our Service</span>
                <p className="sec-title">
                  At Bina and Elian Solar EPC, we pride ourselves on delivering
                  a wide range of top-tier solar energy services designed to
                  cater to the unique needs of homes, businesses, and
                  communities across Nigeria. Our services encompass everything
                  from design and installation to maintenance and large-scale
                  project development, all focused on helping you achieve energy
                  independence and sustainability. Explore the details of our
                  offerings below to find the perfect solution for your energy
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">1. Solar System Design and Engineering</a>
                  </h3>
                  <p className="box-text">
                    Every successful solar energy project begins with a
                    well-thought-out design. Our design and engineering services
                    ensure that your solar system is customized to meet your
                    specific energy requirements and location conditions.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Comprehensive Site Assessment:</strong> We conduct
                      detailed site surveys to evaluate sunlight availability,
                      shading, and energy needs.
                    </p>
                    <p className="mb-1">
                      <strong>Tailored System Design:</strong> Our engineers
                      create designs optimized for efficiency, durability, and
                      cost-effectiveness.
                    </p>
                    <p className="mb-1">
                      <strong>Advanced Software Tools:</strong> We use
                      cutting-edge software for precise load calculations,
                      simulations, and performance modeling.
                    </p>
                    <p className="mb-1">
                      <strong>Scalable Solutions:</strong> Systems are designed
                      to grow with your energy needs, whether you’re expanding
                      your home or business.
                    </p>
                  </div>
                </div>
                <div className="box-img th-anim">
                  <img
                    src={Static.Service21}
                    style={{ height: "50%", alignItems: "right" }}
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">2. Solar Panel Installation</a>
                  </h3>
                  <p className="box-text">
                    The quality of installation plays a crucial role in the
                    performance and longevity of a solar system. Our experienced
                    installation team ensures every project is executed to the
                    highest standards.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Premium Equipment:</strong> We install only
                      certified, high-performance solar panels and components
                      from trusted manufacturers.
                    </p>
                    <p className="mb-1">
                      <strong>Efficient Installation Process:</strong> Our
                      skilled technicians complete installations quickly and
                      effectively, minimizing disruption to your routine.
                    </p>
                    <p className="mb-1">
                      <strong>Safety Standards:</strong> We adhere to all safety
                      and industry guidelines to ensure long-lasting, secure
                      installations.
                    </p>
                    <p className="mb-1">
                      <strong>Turnkey Solutions:</strong> From procurement to
                      activation, we handle every step of the process for a
                      hassle-free experience.
                    </p>
                  </div>
                </div>
                <div className="box-img th-anim">
                  <img
                    src={Static.Service22}
                    style={{ height: "50%", alignItems: "right" }}
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">3. Energy Storage Solutions</a>
                  </h3>
                  <p className="box-text">
                    Energy storage is key to ensuring reliable power supply,
                    especially during outages or peak usage times. We offer
                    innovative battery solutions tailored to your needs.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Battery System Installation:</strong> We provide
                      advanced energy storage systems for both residential and
                      commercial applications.
                    </p>
                    <p className="mb-1">
                      <strong>Uninterrupted Power Supply:</strong> Store excess
                      solar energy for use at night or during grid outages.
                    </p>
                    <p className="mb-1">
                      <strong>Customized Storage Solutions:</strong> Options
                      range from small-scale residential batteries to
                      large-capacity commercial systems.
                    </p>
                    <p className="mb-1">
                      <strong>Cost Efficiency:</strong> Reduce reliance on
                      generators or grid electricity, saving money in the long
                      term.
                    </p>
                  </div>
                </div>
                <div className="box-img th-anim">
                  <img
                    src={Static.Service21}
                    style={{ height: "50%", alignItems: "right" }}
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">4. Solar System Maintenance and Support</a>
                  </h3>
                  <p className="box-text">
                    A well-maintained solar system ensures consistent
                    performance and maximizes the return on your investment. We
                    offer comprehensive maintenance and support services.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Scheduled Maintenance:</strong> Regular system
                      inspections to keep your solar system operating at peak
                      efficiency.
                    </p>
                    <p className="mb-1">
                      <strong>Troubleshooting and Repairs:</strong> Prompt
                      resolution of technical issues with panels, inverters, or
                      batteries.
                    </p>
                    <p className="mb-1">
                      <strong>Remote Monitoring:</strong> Advanced diagnostic
                      tools allow us to monitor and optimize your system’s
                      performance.
                    </p>
                    <p className="mb-1">
                      <strong>System Upgrades:</strong> Assistance with
                      integrating new technology or expanding existing systems.
                    </p>
                  </div>
                </div>
                <div className="box-img th-anim">
                  <img
                    src={Static.Service22}
                    style={{ height: "50%", alignItems: "right" }}
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">1. Solar System Design and Engineering</a>
                  </h3>
                  <p className="box-text">
                    The quality of installation plays a crucial role in the
                    performance and longevity of a solar system. Our experienced
                    installation team ensures every project is executed to the
                    highest standards.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Premium Equipment:</strong> We install only
                      certified, high-performance solar panels and components
                      from trusted manufacturers.
                    </p>
                    <p className="mb-1">
                      <strong>Efficient Installation Process:</strong> Our
                      skilled technicians complete installations quickly and
                      effectively, minimizing disruption to your routine.
                    </p>
                    <p className="mb-1">
                      <strong>Safety Standards:</strong> We adhere to all safety
                      and industry guidelines to ensure long-lasting, secure
                      installations.
                    </p>
                    <p className="mb-1">
                      <strong>Turnkey Solutions:</strong> From procurement to
                      activation, we handle every step of the process for a
                      hassle-free experience.
                    </p>
                  </div>
                </div>
                <div className="box-img th-anim">
                  <img src="assets/img/service/service_2_3.jpg" alt="Icon" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">Solar Panel Energy Installation</a>
                  </h3>
                  <p className="box-text">
                    Comprehensive wind turbine installation services, including
                    site preparation, turbine assembly,
                  </p>
                </div>
                <div className="box-img th-anim">
                  <img src="assets/img/service/service_2_4.jpg" alt="Icon" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">Hydro power Energy</a>
                  </h3>
                  <p className="box-text">
                    Pair wind turbines with battery storage systems to store
                    excess energy for use the our during periods.
                  </p>
                </div>
                <div className="box-img th-anim">
                  <img src="assets/img/service/service_2_5.jpg" alt="Icon" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">Grid Connection & Integration</a>
                  </h3>
                  <p className="box-text">
                    Combine wind energy with other renewable sources like solar
                    or hydropower for a balanced,
                  </p>
                </div>
                <div className="box-img th-anim">
                  <img src="assets/img/service/service_2_6.jpg" alt="Icon" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
