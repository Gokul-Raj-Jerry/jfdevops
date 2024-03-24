import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeThreeFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 pr-0">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".2s">
                              <div className="footer__widget-title mb-30">
                                 <div className="logo">
                                    <Link to="#">
                                       <img src="assets/img/logo/logo-black.png" alt="" />
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <p>If you need world-class app development services, choose JFD. Contact us today for transformative app development.</p>
                                 <div className="footer__img">
                                    <img src="assets/img/footer/footer-img-1.png" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget footer__widget-3 mb-45 wow fadeInUp" data-wow-delay=".4s">
                              <div className="footer__widget-title">
                                 <h4>Company</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><Link to="#">About Us</Link></li>
                                       <li><Link to="#">Testimonials</Link></li>
                                       <li><Link to="#">Consulting</Link></li>
                                       <li><Link to="#">Partners</Link></li>
                                       <li><Link to="#">Contact Us</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".6s">
                              <div className="footer__widget-title">
                                 <h4>Resources</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><Link to="#">Customers</Link></li>
                                       <li><Link to="#">Pricing</Link></li>
                                       <li><Link to="#">News</Link></li>
                                       <li><Link to="#">Learning Center</Link></li>
                                       <li><Link to="#">Help desk</Link></li>
                                       <li><Link to="#">Support</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3  col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget footer__widget-3 mb-45  ml-70 wow fadeInUp" data-wow-delay=".8s">
                              <div className="footer__widget-title">
                                 <h4>Information</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__info mb-35">
                                    <ul>
                                       <li>
                                          <div className="icon theme-color ">
                                             <i> <FaEnvelope /> </i>
                                          </div>
                                          <div className="text theme-color ">
                                             <span><Link to="mailto:support@zibber.com">joyfultomail@gmail.com</Link></span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color">
                                             <i > <FaPhoneAlt /> </i>
                                          </div>
                                          <div className="text theme-color">
                                             <span><Link to="tel:(+642)-394-396-432">(+91) 77602 88526</Link></span>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="footer__social theme-social">
                                    <ul>
                                       <li>
                                          <Link to="#">
                                             <i ><FaFacebookF /></i>
                                             <i ><FaFacebookF /></i>
                                          </Link>
                                       </li>
                                       <li>
                                          <Link to="#">
                                             <i ><FaTwitter /> </i>
                                             <i ><FaTwitter /> </i>
                                          </Link>
                                       </li>
                                       <li>
                                          <Link to="#">
                                             <i ><FaVimeoV /> </i>
                                             <i ><FaVimeoV /> </i>
                                          </Link>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__copyright-3">
                  <div className="container">
                     <div className="footer__copyright-inner">
                        <div className="row align-items-center">
                           <div className="col-xl-12">
                              <div className="footer__copyright-text text-center">
                                 <p>Copyright © 2023 All Rights Reserved passion by <Link to="/home">JFD</Link></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeThreeFooter;