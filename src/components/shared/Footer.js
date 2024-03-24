import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
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
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s">
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
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Use Cases</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><Link to="#">UI Design</Link></li>
                                       <li><Link to="#">Agencies</Link></li>
                                       <li><Link to="#">Digital Marketing</Link></li>
                                       <li><Link to="#">SEO for Business</Link></li>
                                       <li><Link to="#">Enterprise</Link></li>
                                       <li><Link to="#">Publishers</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Information</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__info">
                                    <ul>
                                       <li>
                                          <div className="icon">
                                             <i > <BiMap /> </i>
                                          </div>
                                          <div className="text">
                                             <span>RJ Garden, 1st Floor, Marathahalli,  <br /> Bengaluru, Karnataka 560037.</span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color ">
                                             <i > <FaEnvelope /> </i>
                                          </div>
                                          <div className="text theme-color ">
                                             <span><Link to="mailto:support@zibber.com">joyfultomail@gmail.com</Link></span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color">
                                             <i ><FaPhoneAlt /> </i>
                                          </div>
                                          <div className="text theme-color">
                                             <span><Link to="tel:(+642)-394-396-432">(+91) 77602 88526</Link></span>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__copyright">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                           <div className="footer__copyright-text">
                              <p>Copyright © 2023 All Rights Reserved passion by <Link to="/">JFD</Link></p>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                           <div className="footer__social theme-social f-right">
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
         </footer>
      </>
   );
};

export default Footer;