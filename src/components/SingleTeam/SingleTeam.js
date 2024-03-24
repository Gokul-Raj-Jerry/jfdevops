import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleTeam = ({ image, name, title }) => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team__item p-relative text-center fix mb-30">
               <div className="team__thumb mb-25">
                  <img src={`assets/img/team/team-${image}.jpg`} alt="team" />
                  <div className="team__info text-start">
                     <h3><Link to="/teamDetails">{name}</Link></h3>
                     <span>{title}</span>
                  </div>
                  <div className="team__social theme-social">
                     <ul>
                        <li>
                           <Link to="#">
                              <i > <FaFacebookF /> </i>
                              <i > <FaFacebookF /> </i>
                           </Link>
                        </li>
                        <li>
                           <Link to="#">
                              <i > <FaTwitter /> </i>
                              <i > <FaTwitter /> </i>
                           </Link>
                        </li>
                        <li>
                           <Link to="#">
                              <i > <FaVimeoV /> </i>
                              <i > <FaVimeoV /> </i>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="team__content">
                  <h3><Link to="/teamDetails">{name}</Link></h3>
                  <span>{title}</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleTeam;