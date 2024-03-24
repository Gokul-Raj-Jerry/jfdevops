import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { BiMap } from 'react-icons/bi';
import { FaEnvelope, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Sidebar = ({ show, handleClose }) => {

   return (
      <>
         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo">
                     <Link to="/">
                        <img src="assets/img/logo/logo.png" alt="logo" />
                     </Link>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>


                  <section>
                     <div className="p-0">
                        <div className="sidebar__tab">
                           <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                              <li className="nav-item">
                                 <Link className="nav-link active" id="menu-tab" data-bs-toggle="tab" to="#menu" role="tab" aria-controls="menu" aria-selected="true">menu</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" id="info-tab" data-bs-toggle="tab" to="#info" role="tab" aria-controls="info" aria-selected="false">info</Link>
                              </li>
                           </ul>
                        </div>
                        <div className="sidebar__content">

                           <div className="tab-content" id="sidebar-tab-content">
                              <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">

                                 <div className='side_navBar'>
                                    <Collapsible trigger={<NavLink to="/home">What we do</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu text-white">

                                          <li className='pt-10'><NavLink to="/home">DevOps</NavLink></li>
                                          <li className='pt-10'><NavLink to="/homeTwo">Animation</NavLink></li>
                                          <li className='pt-10'><NavLink to="/homeThree">App DevOps</NavLink></li>
                                          <li className='pt-10'><NavLink to="/headerStyleSeven">IT Consulting</NavLink></li>
                                       </ul>
                                    </Collapsible>

                                   <div className='about iconAdd'>
                                       <NavLink to="/about">About Us </NavLink>
                                   </div>

                                    <Collapsible trigger={<NavLink to="/services">Services</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                          <ul className="sidebar_sub_menu submenu text-white">
                                             <li><NavLink to="/services">Services</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                          </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<NavLink to="/portfolio">Insights</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white text-capitalize">
                                          <li><NavLink to="/portfolio">portfolio</NavLink></li>
                                          <li><NavLink to="/portfolioDetails">portfolio Details</NavLink></li>
                                          <li><NavLink to="/team">team</NavLink></li>
                                          <li><NavLink to="/teamDetails">team Details</NavLink></li>
                                       </ul>
                                    </Collapsible>

                                    <Collapsible trigger={<NavLink to="/blogs">Blog</NavLink>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><NavLink to="/blogs">Blog</NavLink></li>
                                          <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                                       </ul>
                                    </Collapsible>

                                    <div className='about iconAdd border-0'>
                                       <NavLink to="/contact">Contact Us </NavLink>
                                    </div>

                                 </div>

                              </div>

                              <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                 <div className="sidebar__info">
                                    <div className="logo mb-40">
                                       <Link to="/">
                                          <img src="assets/img/logo/logo.png" alt="logo"/>
                                       </Link>
                                    </div>
                                    <p>We must explain to you how all seds this mistakens idea off denouncing pleasures and praising pain was born and I will give you a completed accounts of the system and expound.</p>
                                    <Link to="/contact" className="z-btn z-btn-white">contact us</Link>
                                    <div className="sidebar__search">
                                       <form action="#">
                                          <input type="text" placeholder="Your Keywords.."/>
                                          <button type="submit"><i > <FaSearch /> </i></button>
                                       </form>
                                    </div>
                                    <div className="sidebar__contact mt-30">
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
                                             <div className="icon">
                                                <i > <FaEnvelope /> </i>
                                             </div>
                                             <div className="text ">
                                                <span><Link to="mailto:support@zibber.com">joyfultomail@gmail.com</Link></span>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="icon">
                                                <i ><FaPhoneAlt /> </i>
                                             </div>
                                             <div className="text">
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
                  </section>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;