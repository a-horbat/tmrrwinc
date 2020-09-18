import React from "react"
import Link from 'gatsby-plugin-transition-link';
import SEO from "../components/seo"
import { gsap, Power2 } from "gsap"
import VisibilitySensor from "react-visibility-sensor"
import Manifesta2 from "../images/careers-large.jpg"
import CareersIcon from "../images/careers-marker-icon.png"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Splitting from "splitting"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"

class Careers extends React.Component {

    componentDidMount() {
        Splitting()

        const serviceTL = gsap.timeline()
        serviceTL.to(".top-careers h1 .char", 1.3, {
            y: 0,
            stagger: 0.03,
            ease: Power2.easeInOut,
        })
            .from('.top-careers-info', 0.5, {
                opacity: 0
            })

    }

    handleChange(isVisible) {
        if (isVisible) {
            const timeline = gsap.timeline()
            timeline
                .to("#brands .char", 0.8, {
                    y: 0,
                    stagger: 0.05,
                    ease: Power2.easeInOut,
                })
        }
    }

    handleChange2(isVisible) {
        if (isVisible) {
            const timeline = gsap.timeline()
            timeline
                .to("#products .char", 0.8, {
                    y: 0,
                    stagger: 0.05,
                    ease: Power2.easeInOut,
                })
        }
    }


    handleChange3(isVisible) {
        if (isVisible) {
            const timeline = gsap.timeline()
            timeline
                .to("#business .char", 0.8, {
                    y: 0,
                    stagger: 0.05,
                    ease: Power2.easeInOut,
                })
        }
    }

    handleView4(isVisible) {
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
            <ParallaxProvider>
                <div>
                    <SEO
                        title={"Careers"}
                        description={"TMRRW INC is a creative agency in Sarnia Ontario."}
                    />
                    <section className="top-careers">
                        <div className="vertical-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <h1 data-splitting="">Careers</h1>
                                        <div className="top-careers-info">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <AnchorLink class="next-section white-btn btns" href='#learn-more'><span>Learn
                                        more</span></AnchorLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="join-our-team-section" id="learn-more">
                        <div className="container">
                            <div className="join-our-team-column">
                                <div className="join-our-team-heading">
                                    <Parallax y={[50, -50]}>
                                        <VisibilitySensor onChange={this.handleChange}>
                                            <h2 id="brands" data-splitting="">Join our Team</h2>
                                        </VisibilitySensor>
                                    </Parallax>
                                </div>
                                <Parallax y={[50, -50]}>
                                    <div className="join-our-team-info">
                                        <div className="join-our-team-info-main">
                                            <Link to="/careers/posting-details/"><h3><span>Web Developer</span></h3></Link>
                                        </div>
                                        <div className="join-our-team-info-main">
                                            <Link to="/careers/project-manager/"><h3><span>Project Manager</span></h3></Link>
                                        </div>
                                        <div className="join-our-team-info-main">
                                            <Link to="/careers/sales-lead/"><h3><span>Sales Lead</span></h3></Link>
                                        </div>
                                        <div className="join-our-team-info-main">
                                            <Link to="/careers/project-manager/"><h3><span>Project Manager</span></h3></Link>
                                        </div>
                                        <div className="join-our-team-info-main">
                                            <Link to="/careers/sales-lead/"><h3><span>Sales Lead</span></h3></Link>
                                        </div>
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                    </section>

                    <section className="case-study-section careers-case-study-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 careers-case-study-heading">
                                    <Parallax y={[30, -30]}>
                                        <h2>Who we are</h2>
                                    </Parallax>
                                </div>
                                <div className="col-lg-4 col-md-4 casestudy-title">
                                    <Parallax y={[50, -50]}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Parallax>
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

                </div>
            </ParallaxProvider>
        )
    }
}

export default Careers
