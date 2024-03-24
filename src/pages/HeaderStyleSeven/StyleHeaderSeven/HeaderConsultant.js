import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const HeaderConsultant = () => {
    return (
        <>
            <section className="services__details pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-last order-lg-first">
                            <div className="services__sidebar mr-50">
                                <div className="services__widget grey-bg-18 mb-40">
                                    <div className="services__widget-title">
                                        <h4>IT STRATEGY</h4>
                                    </div>
                                    <div className="services__widget-content">
                                        <div className="services__link">
                                            <ul>
                                                <li>
                                                    <Link to="#">IT Strategy</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Software Management</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">IT Consulting Solutions</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Business Assessment and Modeling</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">IT Architecture</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">IT Implementation</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Analytics</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="services__widget grey-bg-18 mb-40">
                                    <div className="services__widget-title">
                                        <h4>Subscribe Now</h4>
                                    </div>
                                    <div className="services__widget-content">
                                        <div className="services__form">
                                            <form>
                                                <input type="text" placeholder="Name" />
                                                <input type="email" placeholder="Email" />
                                                <button className="z-btn z-btn-3 w-100">
                                                    Subscribe Now
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="services__action grey-bg-18 mb-15">
                                    <Link to="#">
                                        <i>
                                            {" "}
                                            <FiDownload />{" "}
                                        </i>
                                        Download docs
                                    </Link>
                                </div>
                                <div className="services__action grey-bg-18 mb-15">
                                    <Link to="#">
                                        <i>
                                            {" "}
                                            <AiOutlineFilePdf />{" "}
                                        </i>
                                        Characteristics
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="services__text">
                                <h3>Software/IT Consulting Company</h3>
                                <p>
                                    JFD is a trusted party when it comes to hiring IT Consulting
                                    Services. Our company has years of experience in this and we
                                    strive hard and look forward to work on the high pitched IT
                                    Consulting strategies for all your business needs.
                                </p>
                            </div>
                            <div className="services__img mb-45 w-img">
                                <img src="assets/img/services/details/services-02.jpg" alt="" />
                            </div>
                            <div className="services__text">
                                <h3>IT CONSULTING SERVICES WE PROVIDE</h3>
                                <p>
                                    What makes us different from other IT Consulting Company in
                                    Bangalore is that we offer a plethora of services of different
                                    kinds and almost all kinds that are otherwise not found at a
                                    single stop. Moreover, we would really be happy to help in
                                    matching the various requirements of different small, medium
                                    ans large scale organizations. So irrespective of the scale of
                                    your company, you can be rest assured to receive the best,
                                    perfect solution for your company in your preferred budget.
                                </p>
                            </div>
                            <div className="services__list mb-40">
                                <h3>OUR ADVANCED IT CONSULTING ADVICES FOR YOUR ENTERPRISE</h3>
                                <br />
                                <ul>
                                    <li>
                                        <strong>IT Infrastructure Upgrade Services</strong>
                                        <p>
                                            Our IT Consulting Strategies help revitalize your
                                            software, hardware, network resources as well as cut down
                                            on TCO by total infrastructure migration to the cloud.
                                        </p>
                                    </li>

                                    <li>
                                        <strong>Channel Extension</strong>
                                        <p>
                                            Our software development consultants are always ready to
                                            introduce and execute latest tools and technologies into
                                            our client's business to ensure their business services
                                            anywhere and anytime.
                                        </p>
                                    </li>

                                    <li>
                                        <strong>Service Breakdown Benchmarking</strong>
                                        <p>
                                            Our expert programmers with years of experience in the
                                            field help our clients gauge their business performance
                                            from time to time, detect bottlenecks and reform
                                            solutions. We use latest and advanced analysis tools
                                            without actually interfering your workflow.
                                        </p>
                                    </li>
                                    <li>
                                        <strong>Digital Revolution</strong>
                                        <p>
                                            We help you easily enhance your business operational
                                            efficiency and generate better Return on Investment
                                            through workflow digitalization, enterprise integration
                                            and process automation.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>LEADING IT CONSULTING COMPANY</h4>
                                <p>
                                    If you are seeking top-notch IT consulting services globally,
                                    make sure to consider JFD as your trusted partner. JFD holds
                                    high standards when it comes to delivering services, firmly
                                    believing in quality service features readily
                                    available to fulfill business requirements. With JFD, you
                                    can rest assured that you won't need external assistance, as
                                    our solutions guarantee end-to-end problem simplification.
                                    Additionally, you can gain remote access to web servers,
                                    terminal servers, and more. <hr /> From virtual server implementation
                                    to network implementation, JFD proudly offers quick and
                                    cost-efficient services across various sectors. Our IT
                                    solutions are geared toward transforming business processes
                                    and reengineering systems. Don't hesitate to reach out to our
                                    team to learn more about us and allow us to help you excel in
                                    your business operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
        </>
    );
};

export default HeaderConsultant;
