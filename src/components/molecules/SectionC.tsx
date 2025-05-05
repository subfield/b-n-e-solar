import { Static } from "../../assets/img";

export const SectionC = () => {
  return (
    <>
      <div className="space-extra2-top space-bottom overflow-hidden">
        <div className="container">
          <div className="counter-card-wrap style3">
            <div className="counter-card">
              <div className="box-icon">
                <img src={Static.CounterCard11} alt="" />
              </div>
              <h3 className="box-number">
                <span className="counter-number">10,000,000</span>+
              </h3>
              <div className="media-body">
                <p className="box-text mb-n1">
                  Instances of fault activity captured on LV networks
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="counter-card">
              <div className="box-icon">
                <img src={Static.CounterCard12} alt="" />
              </div>
              <h3 className="box-number">
                <span className="counter-number">3,500,000</span>
              </h3>
              <div className="media-body">
                <p className="box-text mb-n1">
                  Train pantographs inspected annually
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="counter-card">
              <div className="box-icon">
                <img src={Static.CounterCard13} alt="" />
              </div>
              <h3 className="box-number">
                <span className="counter-number">20,000,000</span>+
              </h3>
              <div className="media-body">
                <p className="box-text mb-n1">
                  Hours of LV circuit load profile data captured and analysed
                </p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </>
  );
};
