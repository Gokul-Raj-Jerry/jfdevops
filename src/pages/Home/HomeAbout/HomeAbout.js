import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
   return (
      <>
         <section className="about__area pb-200 pt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 pr-0 col-lg-6">
                     <div className="about__thumb m-img">
                        <img src="assets/img/about/about-1.jpg" alt="" />
                        <div className="about__shape">
                           <img src="assets/img/about/red-shape.png" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="about__content">
                        <div className="section__title mb-25">
                           <span>Who we are</span>
                           <h2>We Unlock Potential</h2>
                        </div>
                        <p>At JoyfulStack DevOps, we believe in the transformative power of FulStack DevOps. Our mission is to unlock the true potential of your development and operations processes. With seamless integration of frontend and backend expertise, coupled with robust DevOps practices, we propel your projects to new heights.</p>
                        <div className="about__list">
                           <ul>
                              <li ><span><i > <FaCheck /> </i>Innovative ideas</span></li>
                              <li ><span><i > <FaCheck /> </i>Professional assistance</span></li>
                              <li ><span><i > <FaCheck /> </i>Holistic Development</span></li>
                              <li ><span><i > <FaCheck /> </i>Continuous Evolution</span></li>
                              <li ><span><i > <FaCheck /> </i>Unified Vision</span></li>
                           </ul>
                        </div>
                        <Link to="/services" className="z-btn " >What we do<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAbout;