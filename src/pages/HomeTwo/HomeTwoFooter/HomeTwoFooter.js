import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeTwoFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title mb-30">
                                 <div className="logo">
                                    <Link to="/">
                                       <img src="assets/img/logo/logo-gradient.png" alt="" />
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__copyright-text">
                                    <p>Copyright © 2023 All Rights Reserved passion by <Link to="/">JFD</Link></p>
                                 </div>
                                 <div className="footer__social theme-social mb-30">
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
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1">
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
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1">
                           <div className="footer__widget mb-45">
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
                        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Newsletter</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__subscribe">
                                    <p className="mb-30">Subscribe to out newsletter today to receive updates on the latest news</p>
                                    <div className="footer__subscribe-form p-relative">
                                       <form action="#">
                                          <input type="email" placeholder="Email Address" />
                                          <button type="submit">Subscribe</button>
                                       </form>
                                    </div>
                                 </div>
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

export default HomeTwoFooter;