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
                <span className="counter-number">100</span>%
              </h3>
              <div className="media-body">
                <p className="box-text mb-n1">Project actualization</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="counter-card">
              <div className="box-icon">
                <img src={Static.CounterCard12} alt="" />
              </div>
              <h3 className="box-number">
                <span className="counter-number">120</span>
              </h3>
              <div className="media-body">
                <p className="box-text mb-n1">
                  Research done around the world.
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="counter-card">
              <div className="box-icon">
                <img src={Static.CounterCard13} alt="" />
              </div>
              <h3 className="box-number">
                <span className="counter-number">50</span>
              </h3>
              <div className="media-body">
                <p className="box-text mb-n1">Successful installations done</p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </>
  );
};
