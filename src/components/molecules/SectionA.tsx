import { Static } from "../../assets/img";

export const SectionA = () => {
  return (
    <>
      <div className="position-relative overflow-hidden space-top">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-md-6 col-xl-3">
              <div className="feature-card th-ani">
                <div className="box-icon">
                  <img src={Static.Feature11} alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Smart Solar Systems</a>
                </h3>
                <p className="box-text">
                  Solar panels with PV cells convert sunlight directly into
                  electricity. PV panels are often installed on rooftops, in
                  solar farms
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="feature-card th-ani">
                <div className="box-icon">
                  <img src={Static.Feature12} alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Off Grid</a>
                </h3>
                <p className="box-text">
                  Gain energy independence, access to electricity or reduce
                  diesel generator costs for your home leveraging our complete
                  off-grid solutions for homes. We design a robust and
                  reliable power system.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="feature-card th-ani">
                <div className="box-icon">
                  <img src={Static.Feature13} alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Grid Tie</a>
                </h3>
                <p className="box-text">
                  Our project experience ranges from commercial, industrial,
                  healthcare, education, and government facilities to
                  utility-grade solar farms in any mix of rooftop, ground mount,
                  single tracker, or canopy-based installations{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="feature-card th-ani">
                <div className="box-icon">
                  <img src={Static.Feature14} alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Easy Installation</a>
                </h3>
                <p className="box-text">
                  Easy installation refers to the process of setting up or
                  assembling a product, system, or device with minimal the
                  effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
