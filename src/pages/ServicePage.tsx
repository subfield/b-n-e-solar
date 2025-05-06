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
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid style2">
                <div className="service-grid_content">
                  <h3 className="box-title">
                    <a href="#">5. Off-Grid and Hybrid Solar Solutions</a>
                  </h3>
                  <p className="box-text">
                    For areas without access to the national grid or those
                    seeking a combination of solar and conventional energy, our
                    off-grid and hybrid solutions provide reliable and
                    sustainable power.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Off-Grid Systems:</strong> Completely independent
                      solar setups designed for remote areas with no grid
                      access.
                    </p>
                    <p className="mb-1">
                      <strong>Hybrid Systems:</strong> A seamless integration of
                      solar power with grid electricity or generator systems.
                    </p>
                    <p className="mb-1">
                      <strong>Energy Independence:</strong> Reduce or eliminate
                      reliance on inconsistent power sources.
                    </p>
                    <p className="mb-1">
                      <strong>Flexible and Scalable:</strong> Systems that adapt
                      to your changing energy needs over time.
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
                    <a href="#">6. Solar Water Heating Systems</a>
                  </h3>
                  <p className="box-text">
                    Solar water heating is an efficient and eco-friendly way to
                    meet your water heating needs.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Custom Installation:</strong> Systems tailored to
                      residential, commercial, or industrial applications.
                    </p>
                    <p className="mb-1">
                      <strong>Energy Savings:</strong> Reduce energy costs while
                      maintaining a reliable hot water supply
                    </p>
                    <p className="mb-1">
                      <strong>Durability:</strong> High-quality systems designed
                      to withstand the Nigerian climate.
                    </p>
                    <p className="mb-1">
                      <strong>Eco-Friendly Technology:</strong> Reduce your
                      carbon footprint by using renewable energy.
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
                    <a href="#">7. Energy Consulting and Project Development</a>
                  </h3>
                  <p className="box-text">
                    Our consulting services help clients make informed decisions
                    about their solar energy projects.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Feasibility Studies:</strong> Detailed analysis to
                      evaluate the technical and financial viability of solar
                      projects.
                    </p>
                    <p className="mb-1">
                      <strong>Project Planning and Management:</strong> From
                      initial concept to final implementation, we oversee every
                      aspect of your project.
                    </p>
                    <p className="mb-1">
                      <strong>Regulatory Support:</strong> Assistance with
                      permits, compliance, and accessing government incentives
                      or subsidies.
                    </p>
                    <p className="mb-1">
                      <strong>Customized Energy Strategies:</strong> Solutions
                      designed to align with your energy goals and budget.
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
                    <a href="#">8. Corporate and Community Solar Projects</a>
                  </h3>
                  <p className="box-text">
                    For businesses and communities, we offer large-scale solar
                    energy solutions that deliver shared benefits and
                    significant cost savings.
                  </p>
                  <div>
                    <p className="mb-1">
                      <strong>Solar Farms:</strong> Development and management
                      of solar farms for large-scale energy generation.
                    </p>
                    <p className="mb-1">
                      <strong>Community Solar Projects:</strong> Shared solar
                      solutions that benefit multiple households or businesses
                      within a community.
                    </p>
                    <p className="mb-1">
                      <strong>Corporate Solar Installations:</strong> Custom
                      systems designed to meet the energy needs of corporate
                      clients.
                    </p>
                    <p className="mb-1">
                      <strong>Sustainability Initiatives:</strong> Support for
                      organizations seeking to reduce their carbon footprint and
                      align with global environmental goals.
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
          </div>
          <div className="row gx-4 mt-5 pt-20 pe-xl-3">
            <div className="col-xl-6 mb-xl-0">
              <h4 className="border-title h3">
                Why Work with Bina and Elian Solar EPC?
              </h4>

              <p className="mb-2">
                <strong>Experienced Professionals:</strong> Our team brings
                decades of combined expertise in solar energy design,
                installation, and maintenance.
              </p>
              <p className="mb-2">
                <strong>Proven Track Record:</strong> A history of successful
                projects across Nigeria, from small homes to large businesses.
              </p>
              <p className="mb-2">
                <strong>Top-Quality Components:</strong> We partner with
                industry-leading manufacturers to provide reliable, long-lasting
                systems.
              </p>
              <p className="mb-2">
                <strong>Personalized Solutions:</strong> Each project is
                tailored to meet the unique needs of our clients.
              </p>
              <p className="mb-2">
                <strong>Commitment to Sustainability:</strong> We are passionate
                about creating a cleaner, greener Nigeria through renewable
                energy.
              </p>
            </div>
            <div className="col-xl-6 mt-5 mt-xl-0">
              <div className="skill-card ps-xl-2">
                <h5 className="border-title h3">
                  Let’s Power Your Future Together
                </h5>
                <p className="mb-40">
                  Bina and Elian Solar EPC is here to provide you with
                  innovative and sustainable energy solutions. Whether you need
                  a small solar system for your home, a hybrid solution for your
                  business, or a large-scale solar project for your community,
                  we have the expertise and resources to make it happen.
                </p>
                <p className="mb-40">
                  Contact us today to discuss your solar energy needs and
                  discover how we can help you achieve energy independence, save
                  money, and contribute to a greener Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
