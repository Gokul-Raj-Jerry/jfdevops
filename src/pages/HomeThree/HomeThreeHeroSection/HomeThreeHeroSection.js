import React from "react";
import { Link } from "react-router-dom";

const HomeThreeHeroSection = () => {
   return (
      <>
         <section className="hero__area p-relative">
            <div className="hero__shape">
               <img
                  className="one"
                  src="assets/img/icon/slider/03/icon-1.png"
                  alt=""
               />
               <img
                  className="two"
                  src="assets/img/icon/slider/03/icon-2.png"
                  alt=""
               />
               <img
                  className="three"
                  src="assets/img/icon/slider/03/icon-3.png"
                  alt=""
               />
               <img
                  className="four"
                  src="assets/img/icon/slider/03/icon-4.png"
                  alt=""
               />
               <img
                  className="five"
                  src="assets/img/icon/slider/03/icon-6.png"
                  alt=""
               />
               <img
                  className="six"
                  src="assets/img/icon/slider/03/icon-7.png"
                  alt=""
               />
            </div>
            <div className="hero__item hero__height d-flex align-items-center">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-5 order-last">
                        <div className="hero__thumb-wrapper ml-100 scene p-relative">
                           <div className="hero__thumb one">
                              <img
                                 className="layer"
                                 data-depth="0.2"
                                 src="assets/img/slider/03/slider-1.jpg"
                                 alt=""
                              />
                           </div>
                           <div className="hero__thumb two d-none d-md-block d-lg-none d-xl-block">
                              <img
                                 className="layer"
                                 data-depth="0.3"
                                 src="assets/img/slider/03/slider-2.jpg"
                                 alt=""
                              />
                           </div>
                           <div className="hero__thumb three d-none d-sm-block">
                              <img
                                 className="layer"
                                 data-depth="0.4"
                                 src="assets/img/slider/03/slider-3.jpg"
                                 alt=""
                              />
                           </div>
                           <div className="hero__thumb four d-none d-md-block d-lg-none d-xl-block">
                              <img
                                 className="layer"
                                 data-depth="0.5"
                                 src="assets/img/slider/03/slider-4.jpg"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                        <div className="hero__content">
                           <span>Welcome To JFD.</span>
                           <h1>
                              Get more <br /> Impact Fasted
                           </h1>
                           <section>
                              {" "}
                              <strong>Swift Development:</strong> Our streamlined
                              development process ensures that your app reaches your
                              audience faster than you thought possible, without
                              compromising on quality.<br /> <br />
                              <strong>User-Centric Design: </strong> We prioritize user
                              experience to create apps that captivate and engage users
                              from the moment they open the app, ensuring a lasting
                              impact.<br /><br />
                              <strong>Agile Innovation:</strong> We embrace agile
                              methodologies, allowing us to adapt and iterate swiftly,
                              responding to market trends and user feedback in real-time.<br /><br />
                              <strong>Performance Optimization:</strong> We optimize for
                              speed and efficiency, ensuring that your app runs smoothly
                              on all devices, leaving a lasting impression on users.
                              Market Ready: Get your app to market faster, seize
                              opportunities, and stay ahead of the competition.<br /><br />
                           </section>
                           <span>Don't wait. Experience the impact of a well-designed and quickly deployed app with us. Let's create your success story together!</span><br />
                           <Link to="/about" className="z-btn z-btn-border">
                              See what's New
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   ); 
};

export default HomeThreeHeroSection;
