import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeFaq = () => {
   return (
      <>
         <section className="faq__area pb-200 pt-75">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                     <div className="faq__content">
                        <div className="section-title mb-45">
                           <h2>Do you have <br /> Any question</h2>
                           <p>We help you weather today's uncertainty through our best team.</p>
                        </div>
                        <Link to="/about" className="z-btn z-btn-border">All Question</Link>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-7 offset-xl-2 offset-lg-1">
                     <div className="faq__accordion p-relative">

                        <div className="accordion" id="accordionExample" >
                           <div className="card accordion-item">
                              <div className="card-header accordion-header" id="acc_1" >
                                 <h5 className="mb-0">
                                    <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                       Can you help my business grow?
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapse_1" className="collapse show" aria-labelledby="acc_1" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    <p>Ready to supercharge your business growth? At JFD, we specialize in driving results. Our tailored strategies and expert guidance will help your business thrive. Let's make growth happen together!</p>
                                 </div>
                              </div>
                           </div>
                           <div className="card">
                              <div className="card-header" id="acc_2">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                       What are your best interest rates?
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapse_2" className="collapse" aria-labelledby="acc_2" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    <p>Our interest rates are competitive and tailored to your needs. Contact us today for personalized rate information and to explore the financial solutions that suit you best.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="card">
                              <div className="card-header" id="acc_3">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="true" aria-controls="collapse_3">
                                       How do you calculate cost of services?
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapse_3" className="collapse" aria-labelledby="acc_3" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    <p>We calculate the cost of service with precision. Our methodology considers factors such as project complexity, scope, and resources required. Contact us for a detailed, no-obligation quote tailored to your specific needs.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="card">
                              <div className="card-header" id="acc_4">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="true" aria-controls="collapse_4">
                                       Why should I choose your services over others?
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapse_4" className="collapse" aria-labelledby="acc_4" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                    <p>At JFD, we stand out through our commitment to excellence and tailored solutions. Our expertise, customer-centric approach, and track record of delivering results set us apart. We're not just a service provider; we're your partner in success.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeFaq;