import React from "react"
import Link from 'gatsby-plugin-transition-link';
import SEO from "../components/seo"
import { gsap, Power2 } from "gsap"
import VisibilitySensor from "react-visibility-sensor"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Splitting from "splitting"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"

class ServicesPage extends React.Component {

    componentDidMount() {
        Splitting()

        const serviceTL = gsap.timeline()
        serviceTL.to(".top-services h1 .char", 1.3, {
            y: 0,
            stagger: 0.03,
            ease: Power2.easeInOut,
        })
            .from('.services-info', 0.5, {
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


    render() {
        return (
            <div>
                <SEO
                    title={"Services"}
                    description={"TMRRW INC is a creative agency in Sarnia Ontario."}
                />
                <section class="top-services">
                    <div class="vertical-middle">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <h1 data-splitting="">Services</h1>
                                    <div class="services-info">
                                        <p >We work with you to build comprehensive, thoughtful, and purpose-driven identities and
                                    experiences. Let’s talk about how our services can add value to your company.</p>
                                        <AnchorLink class="next-section white-btn btns" href='#learn-more'><span>Learn
                                        more</span></AnchorLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bottom-services" id="learn-more">
                    <div class="container">
                        <div class="row services-row">
                            <div class="col-lg-4 col-md-4 services-heading">
                                <VisibilitySensor onChange={this.handleChange}>

                                    <h2 id="brands" data-splitting="">Building brands</h2>
                                </VisibilitySensor>
                            </div>
                            <div class="col-lg-8 col-md-8 bottom-services-info">
                                <div class="services-info-main">
                                    <Link to="/services/branding"><h3><span>Branding</span></h3></Link>
                                    <ul>
                                        <li>Branding & Visual Identity</li>
                                        <li>Brand Strategy</li>
                                        <li>Guidelines</li>
                                        <li>Consulting</li>
                                    </ul>
                                </div>
                                <div class="services-info-main">
                                    <Link to="/services/creative-direction"><h3><span>Creative Direction</span></h3></Link>
                                    <ul>
                                        <li>Film Production</li>
                                        <li>Motion Graphics & Animation</li>
                                        <li>Audio Production</li>
                                        <li>Lifestyle Photography</li>
                                        <li>Commercial Photo</li>
                                        <li>3D Capture</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row services-row">
                            <div class="col-lg-4 col-md-4 services-heading">
                                <VisibilitySensor onChange={this.handleChange2}>
                                    <h2 data-splitting="" id="products">Creating products</h2>
                                </VisibilitySensor>
                            </div>
                            <div class="col-lg-8 col-md-8 bottom-services-info">
                                <div class="services-info-main">
                                    <Link to="/services/develop"><h3><span>Develop</span></h3></Link>
                                    <ul>
                                        <li>Web Application</li>
                                        <li>Intranet Solutions</li>
                                        <li>Interactive Web</li>
                                        <li>Mobile Application</li>
                                    </ul>
                                </div>
                                <div class="services-info-main">
                                    <Link to="/services/research-strategy"><h3><span>Research & Strategy</span></h3></Link>
                                    <ul>
                                        <li>Consulting</li>
                                        <li>Brand Research</li>
                                        <li>Polling & Surveys</li>
                                        <li>Web UX Optimization</li>
                                        <li>Product Launch Strategy</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row services-row">
                            <div class="col-lg-4 col-md-4 services-heading">
                                <VisibilitySensor onChange={this.handleChange3}>
                                    <h2 data-splitting="" id="business">Transforming businesses</h2>
                                </VisibilitySensor>
                            </div>
                            <div class="col-lg-8 col-md-8 bottom-services-info">
                                <div class="services-info-main">
                                    <Link to="/services/advertising"><h3><span>Advertising</span></h3></Link>
                                    <ul>
                                        <li>Sriracha edison bulb</li>
                                        <li>Sriracha edison bulb</li>
                                        <li>Sriracha edison bulb</li>
                                        <li>Sriracha edison bulb</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ServicesPage
