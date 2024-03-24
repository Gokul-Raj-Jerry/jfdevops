import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServicesDetailsArea = () => {
   return (
      <>
         <section className="services__details pt-115 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4 order-last order-lg-first">
                     <div className="services__sidebar mr-50">
                        <div className="services__widget grey-bg-18 mb-40">
                           <div className="services__widget-title">
                              <h4>Categories</h4>
                           </div>
                           <div className="services__widget-content">
                              <div className="services__link">
                                 <ul>
                                    <li>
                                       <Link to="/servicesDetails">Market Analysis</Link>
                                    </li>
                                    <li>
                                       <Link to="/servicesDetails"> Great Tests</Link>
                                    </li>
                                    <li>
                                       <Link to="/servicesDetails">Optimal Choice</Link>
                                    </li>
                                    <li>
                                       <Link to="/servicesDetails">SEO Optimized</Link>
                                    </li>
                                    <li>
                                       <Link to="/servicesDetails">Task Consulting</Link>
                                    </li>
                                    <li>
                                       <Link to="/servicesDetails">Great Advices</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="services__widget grey-bg-18 mb-40">
                           <div className="services__widget-title">
                              <h4>Subscribe Now</h4>
                           </div>
                           <div className="services__widget-content">
                              <div className="services__form">
                                 <form>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <button className="z-btn z-btn-3 w-100">
                                       Subscribe Now
                                    </button>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <div className="services__action grey-bg-18 mb-15">
                           <Link to="#">
                              <i>
                                 {" "}
                                 <FiDownload />{" "}
                              </i>
                              Download docs
                           </Link>
                        </div>
                        <div className="services__action grey-bg-18 mb-15">
                           <Link to="#">
                              <i>
                                 {" "}
                                 <AiOutlineFilePdf />{" "}
                              </i>
                              Characteristics
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                     <div className="services__text">
                        <h3>We give the best consulting</h3>
                        <p>
                           We know that every client is unique, and cookie-cutter
                           approaches rarely work. That's why we take the time to
                           thoroughly understand your organization, its challenges, and
                           your goals. We then craft tailored solutions that address your
                           specific needs, ensuring optimal results.{" "}
                        </p>
                     </div>
                     <div className="services__img mb-45 w-img">
                        <img src="assets/img/services/details/services-01.jpg" alt="" />
                     </div>
                     <div className="services__text">
                        <h3>We Unlock Potential</h3>
                        <p>
                           Are you ready to unlock your full potential or take your
                           organization to the next level? Contact us today to schedule a
                           consultation. Let's embark on a transformative journey
                           together and unlock the excellence that lies within.
                        </p>
                     </div>
                     <div className="services__list mb-40">
                        <ul>
                           <li>Personalized Guidance</li>
                           <li>Holistic Solutions</li>
                           <li>Data-Driven Insights</li>
                           <li>Continuous Support</li>
                        </ul>
                     </div>
                     <div className="services__text">
                        <h4>The Benefits of Unlocking Potential</h4>
                        <section>
                           <li>Enhanced Performance</li> <br />
                           <li>Fulfillment and Satisfaction</li>
                           <br />
                           <li>Innovation and Growth</li> <br />
                           <li>Confidence and Resilience</li>
                        </section><br />
                        <p>
                           We believe that every individual and organization possesses
                           untapped potential waiting to be unlocked. Our mission is to
                           help you discover and harness that potential, driving personal
                           and professional growth beyond your wildest expectations.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesDetailsArea;
