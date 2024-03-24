import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogFooter = () => {
   return (
      <>
         <footer>
            <div className="footer__area black-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".2s">
                              <div className="footer__widget-title mb-30">
                                 <div className="logo">
                                    <Link to="/home">
                                       <img src="assets/img/logo/logo.png" alt="" />
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content footer__widget-content-2">
                                 <p className="mb-30">Copyright © 2023 All Rights Reserved passion by <Link to="/home">JFD</Link></p>
                                 <div className="footer__social footer__social-2 theme-social mb-30">
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
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 ">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s">
                              <div className="footer__widget-title text-white">
                                 <h4>Company</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links footer__links-2">
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
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 ">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".6s">
                              <div className="footer__widget-title text-white">
                                 <h4>Resources</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links footer__links-2">
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
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 ">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".8s">
                              <div className="footer__widget-title text-white">
                                 <h4>Use Cases</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links footer__links-2">
                                    <ul>
                                       <li><Link to="#">UI Design</Link></li>
                                       <li><Link to="#">Agencies</Link></li>
                                       <li><Link to="#">Digital Marketing</Link></li>
                                       <li><Link to="#">SEO for Business</Link></li>
                                       <li><Link to="#">Enterprise</Link></li>
                                       <li><Link to="#">Publishers</Link></li>
                                       <li><Link to="#"></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__copyright footer__copyright-2">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-12 text-center">
                           <div className="footer__copyright-text footer__copyright-text-2">
                              <p>Copyright © 2023 All Rights Reserved passion by <Link to="/home">JFD</Link></p>
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

export default BlogFooter;