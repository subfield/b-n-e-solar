import { Header } from "../components/molecules/Header";
import { Static } from "../assets/img";
import { Link } from "react-router-dom";

import { SectionK } from "../components/molecules/SectionK";
import { SectionH } from "../components/molecules/SectionH";
import { Footer } from "../components/molecules/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="breadcumb-wrapper" data-bg-src={Static.BreadcumbBg}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <>
        <section className="space">
          <div className="container">
            <div className="team-details">
              <div className="row">
                <div className="col-xl-6">
                  <div className="team-img th-anim mb-40 mb-xl-0">
                    <img
                      className="w-100"
                      src={Static.HeroBg11}
                      alt="about image"
                    />
                  </div>
                </div>
                <div className="col-xl-6 align-self-center">
                  <div className="team-about">
                    <div className="team-wrapp">
                      <div>
                        <h3 className="team-about_title">
                          About Bina and Elian Solar EPC{" "}
                        </h3>
                        <p className="team-about_desig">Know more about us</p>
                      </div>
                    </div>
                    <p className="team-about_text">
                      Bina and Elian Solar EPC is a forward-thinking company
                      dedicated to transforming Nigeria’s energy landscape
                      through the power of renewable energy. As a leading Solar
                      Engineering, Procurement, and Construction (EPC) firm, we
                      are on a mission to bridge the energy gap by providing
                      innovative, efficient, and affordable solar energy
                      solutions that cater to the diverse needs of our
                      customers.
                    </p>
                    <p className="team-about_text">
                      Operating at the forefront of the solar industry, we
                      combine cutting-edge technology with a deep understanding
                      of Nigeria’s unique energy challenges. Our solutions are
                      designed to address power shortages, reduce dependency on
                      traditional energy sources, and empower individuals,
                      businesses, and communities to embrace clean and
                      sustainable energy.
                    </p>
                    <p className="team-about_text">
                      Whether you’re a homeowner looking to reduce electricity
                      costs, a business aiming for energy independence, or a
                      community seeking reliable power solutions, Bina and Elian
                      Solar EPC is your trusted partner in achieving your energy
                      goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-4 mt-5 pt-20 pe-xl-3">
              <div className="col-xl-6 mb-xl-0">
                <h4 className="border-title h3">Our Mission</h4>
                <p className="mb-30">
                  Our mission is to revolutionize access to energy in Nigeria by
                  delivering top-quality solar solutions that are efficient,
                  reliable, and tailored to the specific needs of our clients.
                  We aim to create a greener and more sustainable future by
                  empowering people and organizations to transition to renewable
                  energy.
                </p>
              </div>
              <div className="col-xl-6 mt-5 mt-xl-0">
                <div className="skill-card ps-xl-2">
                  <h5 className="border-title h3">Our Vision</h5>
                  <p className="mb-40">
                    Our vision is to become Nigeria’s foremost provider of solar
                    energy solutions, leading the charge toward a nation powered
                    by clean, affordable, and reliable renewable energy. We see
                    a future where solar power drives sustainable development,
                    enhances quality of life, and supports economic growth
                    across all sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="row gx-4 mt-5 pt-20 pe-xl-3">
              <div className="col-xl-6 mb-xl-0">
                <h4 className="border-title h3">What We Do</h4>
                <p className="mb-3">
                  <strong>Custom Solar System Design:</strong> We assess your
                  energy needs and design tailored solar systems to meet your
                  requirements.
                </p>

                <p className="mb-3">
                  <strong>Seamless Installation:</strong> Our expert team
                  ensures the flawless installation of solar panels, inverters,
                  and batteries for optimal performance.
                </p>
                <p className="mb-3">
                  <strong>Maintenance and Support:</strong> We provide ongoing
                  support to ensure your solar systems continue to perform
                  efficiently for years to come.
                </p>
                <p className="mb-3">
                  <strong>Energy Optimization Solutions:</strong> We integrate
                  energy-saving technologies to maximize efficiency and reduce
                  costs.
                </p>
              </div>
              <div className="col-xl-6 mt-5 mt-xl-0">
                <div className="skill-card ps-xl-2">
                  <h4 className="border-title h3">
                    Why Choose Bina and Elian Solar EPC?
                  </h4>
                  <p className="mb-3">
                    <strong>Unmatched Expertise:</strong> We utilize the latest
                    advancements in solar technology to provide solutions that
                    are both durable and high-performing
                  </p>

                  <p className="mb-3">
                    <strong>Sustainability Commitment:</strong> Our work
                    contributes to environmental preservation by reducing carbon
                    emissions and promoting the use of renewable energy.
                  </p>
                  <p className="mb-3">
                    <strong>Affordability:</strong> We believe in making clean
                    energy accessible to everyone, offering cost-effective
                    solutions without compromising on quality.
                  </p>
                  <p className="mb-3">
                    <strong>Customer Focus:</strong> Our commitment to client
                    satisfaction drives us to deliver personalized service and
                    support at every stage of your solar journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="row gx-4 mt-5 pt-20 pe-xl-3">
              <div className="col-xl-6 mb-xl-0">
                <h4 className="border-title h3">Why Solar Energy Matters</h4>
                <p className="mb-3">
                  Nigeria’s energy demands are growing rapidly, but the
                  availability of traditional power sources often falls short.
                  Solar energy presents a transformative solution to this
                  challenge, offering a clean, sustainable, and abundant power
                  source that can drive progress and innovation. By choosing
                  solar energy, you’re not just reducing electricity
                  bills—you’re contributing to a future where energy
                  independence, environmental sustainability, and economic
                  growth go hand in hand.
                </p>
              </div>
              <div className="col-xl-6 mt-5 mt-xl-0">
                <div className="skill-card ps-xl-2">
                  <h4 className="border-title h3"></h4>
                  <p className="mb-3">
                    At Bina and Elian, we are proud to be at the heart of this
                    transformation. We don’t just provide energy solutions; we
                    inspire progress, drive innovation, and build a brighter
                    future. Together, let’s harness the power of the sun to
                    unlock new possibilities and create a more
                    sustainable tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <SectionK />
      <SectionH />
      <Footer />
    </>
  );
};

export default AboutPage;
