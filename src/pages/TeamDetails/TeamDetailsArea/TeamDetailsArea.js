import React from "react";
import { BiMap } from "react-icons/bi";
import {
   FaEnvelope,
   FaFacebookF,
   FaPhoneAlt,
   FaTwitter,
   FaVimeoV,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamDetailsArea = () => {
   return (
      <>
         <section className="team__details pt-120 pb-160">
            <div className="container">
               <div className="team__details-inner p-relative white-bg">
                  <div className="team__details-shape p-absolute">
                     <img src="assets/img/icon/team/shape-1.png" alt="" />
                  </div>
                  <div className="row">
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-img w-img mr-70">
                           <img src="assets/img/team/details/team-01.jpg" alt="" />
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-content pt-105">
                           <span>Vice President</span>
                           <h3>Jacob Jayraj</h3>
                           <p>
                              We are here to assist you with any questions, concerns,
                              Please feel free to get in touch with us through the
                              following channels.!
                           </p>
                           <div className="team__details-contact mb-45">
                              <ul>
                                 <li>
                                    <div className="icon theme-color ">
                                       <i>
                                          {" "}
                                          <FaEnvelope />{" "}
                                       </i>
                                    </div>
                                    <div className="text theme-color ">
                                       <span>
                                          <Link to="mailto:support@zibber.com">
                                             joyfultomail@gmail.com
                                          </Link>
                                       </span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon theme-color">
                                       <i>
                                          <FaPhoneAlt />{" "}
                                       </i>
                                    </div>
                                    <div className="text theme-color">
                                       <span>
                                          <Link to="tel:(+642)-394-396-432">
                                             (+91) 77602 88526
                                          </Link>
                                       </span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon">
                                       <i>
                                          {" "}
                                          <BiMap />{" "}
                                       </i>
                                    </div>
                                    <div className="text">
                                       <span>
                                          RJ Garden, 1st Floor, Marathahalli, <br />{" "}
                                          Bengaluru, Karnataka 560037.
                                       </span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="team__details-social theme-social">
                              <ul>
                                 <li>
                                    <Link to="#">
                                       <i>
                                          <FaFacebookF />
                                       </i>
                                       <i>
                                          <FaFacebookF />
                                       </i>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <i>
                                          <FaTwitter />{" "}
                                       </i>
                                       <i>
                                          <FaTwitter />{" "}
                                       </i>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <i>
                                          <FaVimeoV />{" "}
                                       </i>
                                       <i>
                                          <FaVimeoV />{" "}
                                       </i>
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                     <div className="team__details-info mt-60">
                        <h4>Information</h4>
                        <p>
                           At JFD, our diverse and talented team is passionate about
                           creating innovative solutions that bring your ideas to life.
                           We specialize in a range of areas to meet your digital needs.
                           Our software development team is at the forefront of
                           technology, with expertise in building robust and scalable
                           software solutions. Whether you require custom software
                           applications, system integrations, or software maintenance,
                           our team has the experience and skills to deliver results that
                           exceed your expectations. Bring your stories and ideas to life
                           with our animation experts. From 2D and 3D animations to
                           character design and motion graphics, we use creativity and
                           cutting-edge technology to craft captivating visuals that
                           engage your audience and leave a lasting impression.Digital
                           work encompasses a wide range of creative and technical
                           services. Our team excels in graphic design, video production,
                           digital marketing, and content creation. We help you establish
                           a strong online presence, deliver compelling content, and
                           connect with your target audience effectively. In the
                           mobile-first era, having a presence on smartphones and tablets
                           is essential. Our app development team specializes in creating
                           native and cross-platform mobile applications that deliver
                           exceptional user experiences. Whether you need an iOS,
                           Android, or hybrid app, we have you covered. Your website is
                           often the first point of contact for potential customers. Our
                           web development team designs and develops responsive,
                           user-friendly websites that not only look great but also
                           perform exceptionally. We use the latest web technologies to
                           ensure your online presence stands out in a crowded digital
                           landscape.
                        </p>
                        <p>
                           At JFD, we are committed to excellence in every project we
                           undertake. Our team is dedicated to understanding your unique
                           goals and challenges, and we work collaboratively to find
                           creative solutions that drive success.
                        </p>

                        <Link to="/contact" className="z-btn mt-10">
                           Appointment
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default TeamDetailsArea;
