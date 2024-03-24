import React from 'react';

const HomeContact = () => {
   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                        <iframe title='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1496809649834!2d77.69633947822729!3d12.962272282495057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11e6982ac5df%3A0xb52fcb3ad37e0ec3!2sPro%20Stack%20Academy!5e0!3m2!1sen!2sus!4v1693407344819!5m2!1sen!2sus"></iframe>
                        <div className="contact__wrapper d-md-flex justify-content-between">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>
                                 <li>
                                    <h4>Address</h4>
                                    <p>RJ Garden, 1st Floor, Marathahalli,  <br /> Bengaluru, Karnataka 560037.</p>
                                 </li>
                                 <li>
                                    <h4>call us</h4>
                                    <p><a href="tel:(404)-888-123-456">(+91) 77602 88526</a></p>
                                 </li>
                                 <li>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:Info@example.com">joyfultomail@gmail.com</a></p>
                                 </li>
                              </ul>
                           </div>
                           <div className="contact__form">
                              <form action="#">
                                 <input type="text" placeholder="Your Name" />
                                 <input type="email" placeholder="Your Email" />
                                 <textarea placeholder="Your Message"></textarea>
                                 <button type="button" className="z-btn " >Send Message</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeContact;