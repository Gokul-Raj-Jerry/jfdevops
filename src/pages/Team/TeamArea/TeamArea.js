import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const TeamArea = () => {
   return (
      <>
         <section className="team__area pt-115 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>Our Team</span>
                        <h2>We help to create visual strategies.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleTeam image="1" name="GOKUL RAJ" title="Founder & CEO" />
                  <SingleTeam image="2" name="Jacob Jayraj" title="Vice President" />
                  <SingleTeam image="3" name="HARISH M" title="Director" />
                  <SingleTeam image="4" name="Ganesh Kumar" title="Animator" />
                  <SingleTeam image="5" name="Sunil Kumar" title="Creative head" />
                  <SingleTeam image="6" name="Sujith Kumar" title="Project Manager" />
                  <SingleTeam image="7" name="Ningaraju BT" title="Ass. Director" />
                  <SingleTeam image="8" name="Kiran Kumar" title="UI/UX Software Designer" />
                  <SingleTeam image="9" name="Praveen" title="App Developer" />
                  <SingleTeam image="10" name="Lakshana Sneha" title="Chief HR Officer" />
                  <SingleTeam image="11" name="SR Deepak" title="Digital Marketer" />
                  <SingleTeam image="12" name="Blessy" title="Scrum master" />

               </div >
            </div >
         </section >
      </>
   );
};

export default TeamArea;