import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s">
                        <span>Our Services</span>
                        <h2>Providing Exceptional Experiences with Cutting-Edge Tools.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <SingleService icon="1" title="Holistic DevOps Solutions" />
                  <SingleService icon="2" title="Fullstack Development" />
                  <SingleService icon="3" title="Video Editing Mastery" />
                  <SingleService icon="4" title="Creative Animation" />
                  <SingleService icon="5" title="Finance Analytics" />
                  <SingleService icon="6" title="Thorough Analysis" />
                  <SingleService icon="7" title="Innovative Ideation" />
                  <SingleService icon="8" title="Advanced Customer Support" />
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;