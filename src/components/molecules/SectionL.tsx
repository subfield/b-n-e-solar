import { Static } from "../../assets/img";

export const SectionL = () => {
  return (
    <>
      <div className="overflow-hidden bg-smoke2" id="faq-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="faq-image th-parallax">
                <img src={Static.FaqImage} alt="" />
              </div>
            </div>
            <div className="col-xl-5 mt-35 mt-xl-0">
              <div className="faq-area">
                <div className="title-area pe-xxl-5 me-xxl-5">
                  <span className="sub-title">FAQ’S</span>
                  <h2 className="sec-title">Have Any Questions?</h2>
                </div>
                <div className="accordion-area accordion" id="faqAccordion">
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="false"
                        aria-controls="collapse-1"
                      >
                        What does EPC stand for in solar energy?
                      </button>
                    </div>
                    <div
                      id="collapse-1"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-1"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          EPC stands for Engineering, Procurement, and
                          Construction. It’s a project delivery model that
                          oversees the solar installation process from design
                          through to completion.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card active">
                    <div className="accordion-header" id="collapse-item-2">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="true"
                        aria-controls="collapse-2"
                      >
                        What are the benefits of using an EPC contractor for a
                        solar project?
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse show"
                      aria-labelledby="collapse-item-2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          An EPC contractor streamlines the process, offers cost
                          management, ensures accountability, and provides a
                          single point of responsibility, making the project
                          more efficient and cost-effective.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        How long does a typical solar EPC project take?
                      </button>
                    </div>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          The timeline depends on project size, site conditions,
                          and permitting, but most large-scale projects take
                          several months to over a year to complete
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
