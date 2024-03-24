import React from "react";
/* import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa"; */
import BlogLeftSideBar from "../../Blogs/BlogsArea/BlogLeftSideBar";
/* import { BiReply } from "react-icons/bi";
import { Link } from "react-router-dom"; */

const BlogDetailsArea = () => {
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <div className="blog__details-wrapper mr-50">
                        <div className="blog__text mb-45">
                           <p>
                              At JFD, we believe in the power of animation to transform
                              web development. In our latest blog post, we dive into the
                              exciting world where technology meets creativity. Here's a
                              summary of what you can expect
                           </p>
                        </div>
                        <div className="blog__quote mb-40 p-relative white-bg fix">
                           <div className="blog__quote-line">
                              <img
                                 className="line-1"
                                 src="assets/img/icon/blog/line-1.png"
                                 alt=""
                              />
                              <img
                                 className="line-2"
                                 src="assets/img/icon/blog/line-2.png"
                                 alt=""
                              />
                           </div>
                           <div className="quote mb-10">
                              <img src="assets/img/icon/blog/quote-1.png" alt="" />
                           </div>
                           <div className="quote-2 p-absolute">
                              <img src="assets/img/icon/blog/quote-2.png" alt="" />
                           </div>
                           <blockquote>
                              <p>
                                 In today's digital landscape, static websites are a thing
                                 of the past. We begin by discussing the evolving role of
                                 animation in modern web development. Discover how
                                 animation adds life, interactivity, and engagement to your
                                 web projects.
                              </p>
                           </blockquote>
                           <h4>Jacob</h4>
                        </div>
                        <div className="blog__text mb-40">
                           <p>
                              We explore the myriad benefits of incorporating animation
                              into your web projects. From enhancing user experience and
                              storytelling to conveying information more effectively,
                              animation is a versatile tool that can elevate your
                              website's impact.
                           </p>
                        </div>
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/b-d-1.jpg" alt="" />
                        </div>
                        <div className="blog__text mb-40">
                           <h3>JFD is the only theme you will ever need</h3>
                           <p>
                              Not all animations are created equal. In this section, we
                              break down the various types of web animations, including
                              CSS animations, SVG animations, and JavaScript-powered
                              animations. Learn when and how to use each type effectively.
                           </p>

                           <p>
                              {" "}
                              <span>
                                 Animation Best Practices
                              </span>{" "}
                              Creating effective animations requires attention to detail.
                              We share best practices for implementing animations
                              seamlessly. Discover tips for optimizing performance,
                              achieving cross-browser compatibility, and ensuring
                              accessibility for all users.
                           </p>
                        </div>
                        {/*  <div className="blog__tag mb-30">
                           <span>Tag : </span>
                           <Link to="#">Blog</Link>
                           <Link to="#">Creative</Link>
                           <Link to="#">Portfolio</Link>
                           <Link to="#">Theme</Link>
                        </div> */}
                        {/* <div className="blog__share d-flex align-items-center mb-30">
                           <span>Share : </span>
                           <div className="blog__social theme-social d-inline-block">
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
                        </div> */}
                        {/*  <div className="blog__author mb-95 d-sm-flex">
                           <div className="blog__author-img mr-30">
                              <img src="assets/img/blog/author/author-1.jpg" alt="" />
                           </div>
                           <div className="blog__author-content">
                              <h5>Sophie Ianiro</h5>
                              <span>Author</span>
                              <p>
                                 I said cracking goal down the pub blag cheeky bugger at
                                 public school A bit of how's your father boot.!
                              </p>
                           </div>
                        </div> */}
                        {/* <div className="post-comments mb-95" data-wow-delay=".6s">
                           <div className="post-comment-title mb-40">
                              <h3>3 Comments</h3>
                           </div>
                           <div className="latest-comments">
                              <ul>
                                 <li>
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img
                                             src="assets/img/blog/comment/comments-1.png"
                                             alt=""
                                          />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>David Angel Makel</h5>
                                             <span className="post-meta">
                                                December 26, 2021
                                             </span>
                                          </div>
                                          <p>
                                             The bee's knees bite your arm off bits and bobs he
                                             nicked it gosh gutted mate blimey, old off his nut
                                             argy bargy vagabond buggered dropped.
                                          </p>
                                          <Link to="#" className="comment-reply">
                                             {" "}
                                             <i>
                                                {" "}
                                                <BiReply />{" "}
                                             </i>{" "}
                                             Reply
                                          </Link>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="children">
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img
                                             src="assets/img/blog/comment/comments-rep-1.png"
                                             alt=""
                                          />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>Bailey Wonger</h5>
                                             <span className="post-meta">
                                                December 27, 2021
                                             </span>
                                          </div>
                                          <p>
                                             Do one say wind up buggered bobby bite your arm
                                             off gutted mate, David victoria sponge cup of char
                                             chap fanny around.
                                          </p>
                                          <Link to="#" className="comment-reply">
                                             {" "}
                                             <i>
                                                {" "}
                                                <BiReply />{" "}
                                             </i>{" "}
                                             Reply
                                          </Link>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="children">
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img
                                             src="assets/img/blog/comment/comments-rep-2.png"
                                             alt=""
                                          />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>Hilary Ouse</h5>
                                             <span className="post-meta">
                                                December 28, 2021
                                             </span>
                                          </div>
                                          <p>
                                             Baking cakes is cobblers wellies William geeza
                                             bits and bobs what a plonker it's your round,
                                          </p>
                                          <Link to="#" className="comment-reply">
                                             {" "}
                                             <i>
                                                {" "}
                                                <BiReply />{" "}
                                             </i>{" "}
                                             Reply
                                          </Link>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div> */}
                        <div className="post-comment-form">
                           <h4>Leave a Reply </h4>
                           <span>Your email address will not be published.</span>
                           <form action="#">
                              <div className="row">
                                 <div className="col-xl-12">
                                    <div className="post-input">
                                       <textarea placeholder="Your message..."></textarea>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-md-6">
                                    <div className="post-input">
                                       <input type="text" placeholder="Your Name" />
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-md-6">
                                    <div className="post-input">
                                       <input type="email" placeholder="Your Email" />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="post-input">
                                       <input type="text" placeholder="Website" />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="post-check mb-40">
                                       <input type="checkbox" />
                                       <span>
                                          Save my name, email, and website in this browser for
                                          the next time I comment.
                                       </span>
                                    </div>
                                 </div>
                              </div>

                              <button type="button" className="z-btn">
                                 Send Message
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>

                  <BlogLeftSideBar />
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;
