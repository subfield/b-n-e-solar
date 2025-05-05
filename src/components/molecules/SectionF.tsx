import { Static } from "../../assets/img";

export const SectionF = () => {
  return (
    <>
      <section className="bg-theme">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6 cta-item_wrapp">
              <div className="cta-item">
                <div className="box-icon">
                  <img src={Static.CTA11} alt="" />
                </div>
                <h3 className="box-title">Domestic Installation</h3>
                <p className="box-text">
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                  EV Charging
                </p>
              </div>
            </div>
            <div className="col-lg-6 cta-item_wrapp">
              <div className="cta-item">
                <div className="box-icon">
                  <img src={Static.CTA12} alt="" />
                </div>
                <h3 className="box-title">Commercial Installation</h3>
                <p className="box-text">
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                  EV Charging
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
