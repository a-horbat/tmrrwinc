import React from "react"
import Link from 'gatsby-plugin-transition-link';
import SEO from "../../components/seo"
import { gsap, Power2 } from "gsap"
import VisibilitySensor from "react-visibility-sensor"
import Manifesta2 from "../../images/careers-large.jpg"
import WorkMobile from "../../images/want-work-mobile.jpg"
import CareersIcon from "../../images/careers-marker-icon.png"

import Splitting from "splitting"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"

class PostingDetails extends React.Component {

    componentDidMount() {
        Splitting()

        const serviceTL = gsap.timeline()
        serviceTL.to(".top-careers h1 .char", 1.3, {
            y: 0,
            stagger: 0.03,
            ease: Power2.easeInOut,
        })
            .from('.services-info', 0.5, {
                opacity: 0
            })

    }

    handleView(isVisible) {
        if (isVisible) {
            const timeline = gsap.timeline()
            timeline
                .to(".want-work-info", 1, {
                    y: 0,
                    stagger: 0.05,
                    opacity: 1,
                    ease: Power2.easeInOut,

                })

        }
    }

    render() {
        return (
                <div>
                    <SEO
                        description={"TMRRW INC is a creative agency in Sarnia Ontario."}
                    />
                    <section className="posting-details-top-section sky-gradient-half">
                        <div className="container">
                            <div className="go-back">
                                <Link to="/careers/"><span></span>Back to Careers</Link>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-md-9">
                                    <h1>Web Developer</h1>
                                    <div className="posting-details-info">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        <div className="posting-details-header">
                                            <h2 className="">Position Details</h2>
                                        </div>
                                        <div className="posting-details-list-section">
                                            <div className="posting-details-list-header">
                                                <h3>Responsobilities</h3>
                                            </div>

                                            <ul className="posting-details-list">
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</li>
                                            </ul>
                                        </div>
                                        <div className="posting-details-list-section">
                                            <div className="posting-details-list-header">
                                                <h3>Qualifications</h3>
                                            </div>

                                            <ul className="posting-details-list">
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</li>
                                            </ul>
                                        </div>

                                        <div className="posting-details-btn">
                                            <Link className="secondary-btn btns" to="/contact/">
                                                <span>Apply Now</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="case-study-section careers-case-study-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 careers-case-study-heading">
                                    <h2>Who we are</h2>
                                </div>
                                <div className="col-lg-4 col-md-4 casestudy-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="careers-want-to-work-section">
                        <div className="container careers-want-to-work-container">
                            <div className="row flex-nowrap">
                                <div className="careers-want-to-work-lft-img">
                                        <img src={Manifesta2} alt="" />
                                </div>
                                <div className="careers-want-to-work-info-main">
                                    <VisibilitySensor onChange={this.handleView} partialVisibility>

                                        <div className="careers-want-work-info">
                                            <div className="about-company-main">
                                                <div className="about-company">
                                                    <h3>We Are Kind</h3>
                                                    <p>
                                                        We listen from the heart, think empatheticaly,
                                                        and healp each other grow. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        In a sodales dui.</p>
                                                </div>
                                                <div className="about-company">
                                                    <h3>We Are Smart</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                                <div className="about-company">
                                                    <h3>We Are Creative</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                        </div>
                                    </VisibilitySensor>
                                </div>

                            </div>

                        </div>

                    </section>

                    <section className="careers-markers-section">
                        <div className="container">
                            <div className="row careers-markers-row">

                                <div className="careers-markers-main-info">
                                    <div className="careers-markers-img">
                                        <img src={CareersIcon} />
                                    </div>
                                    <div className="careers-markers-header">
                                        <h3>Title Here</h3>
                                    </div>
                                    <div className="careers-markers-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </p>
                                    </div>
                                </div>
                                <div className="careers-markers-main-info">
                                    <div className="careers-markers-img">
                                        <img src={CareersIcon} />
                                    </div>
                                    <div className="careers-markers-header">
                                        <h3>Title Here</h3>
                                    </div>
                                    <div className="careers-markers-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                       </p>
                                    </div>
                                </div>
                                <div className="careers-markers-main-info">
                                    <div className="careers-markers-img">
                                        <img src={CareersIcon} />
                                    </div>
                                    <div className="careers-markers-header">
                                        <h3>Title Here</h3>
                                    </div>
                                    <div className="careers-markers-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <div className="posting-details-apply">
                        <div className="container">
                            <div className="posting-details-apply-main">
                                <h4>Apply Now</h4>
                            </div>
                        </div>
                    </div>

                </div>
            
        )
    }
}

export default PostingDetails
