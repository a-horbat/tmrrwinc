import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Splitting from "splitting"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import { gsap, Power2 } from "gsap"

// images
import NextArrw from "../../images/next-arrow.svg"
import PrevArrw from "../../images/prev-arrow.svg"
import NumberImg from "../../images/number-img.svg"
import ServiceDeet1 from "../../images/services-detail1.jpg"
import ServiceDeetBtm from "../../images/services-details-btm-img.jpg"


class Branding extends React.Component {

    componentDidMount() {
        Splitting()
        this.myElement = null
        this.myTween = null

        const introTL = gsap.timeline()
        introTL
            .to(".banner-section .char", 0.7, {
                y: 0,
                stagger: 0.01,
                ease: Power2.easeInOut,
            })
            .from(
                ".header-right",
                0.9,
                {
                    opacity: 0,
                    ease: "Power2.easeInOut",
                },
                "-=0.5"
            )
            .from("#play-button", 1, {
                opacity: 0,
            })
        gsap.to("#text", 10, {
            rotation: 360,
            repeat: -1,
            transformOrigin: "50% 50%",
            ease: "none",
        })
    }

    render() {
        return (
            <div>
                <SEO
                    description={"TMRRW INC is a creative agency in Sarnia Ontario."}
                />
                <section class="services-detail-section sky-gradient">
                    <div class="container">
                        <div class="go-back">
                            <Link to="/services/"><span></span> Go back</Link>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <h1>Branding <span></span></h1>
                                <div class="d-block d-sm-none">
                                    <div class="services-tabs">
                                        <a href="javascript:void(0);" title="Service List">Service List <span></span></a>
                                        <ul class="services-list">
                                            <li>
                                                <a href="https://www.google.com/" title="Option 01 (Anchor Link to Title)">Option 01 (Anchor Link to
                                            Title)</a>
                                            </li>
                                            <li class="cant-click">
                                                <a href="#" title="Option 02 (Can’t Click)" class="disabled">Option 02 (Can’t Click)</a>
                                            </li>
                                            <li class="cant-click">
                                                <a href="#" title="Option 03 (Can’t Click)" class="disabled">Option 03 (Can’t Click)</a>
                                            </li>
                                            <li>
                                                <a href="#" title="Option 04 (Anchor Link to Title)">Option 04 (Anchor Link to
                                            Title)</a>
                                            </li>
                                            <li>
                                                <a href="#" title=" Option 05 (Anchor Link to Title)"> Option 05 (Anchor Link to
                                            Title)</a>
                                            </li>
                                            <li class="cant-click">
                                                <a href="#" title="Option 01 (Anchor Link to Title)" class="disabled">Option 06 (Can’t Click)</a>
                                            </li>
                                            <li class="cant-click">
                                                <a href="#" title="Option 01 (Anchor Link to Title)" class="disabled"> Option 07 (Can’t Click)</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="service-details-info">
                                    <h3>Branding & Visual Identity</h3>
                                    <p>Listicle single-origin coffee neutra butcher tumblr shoreditch small batch authentic aesthetic typewriter. Hashtag tbh humblebrag beard celiac authentic.</p>
                                    <p>Vexillologist gochujang organic selfies. Intelligentsia squid cornhole church-key truffaut,
                                air plant yr hoodie messenger.</p>
                                </div>
                                <p></p>
                            </div>
                            <div class="col-lg-6 col-md-6 d-none d-sm-block services-list">
                                <ul>
                                    <li>
                                        <a href="#" title="Option 01 (Anchor Link to Title)">Option 01 (Anchor Link to Title)</a>
                                    </li>
                                    <li class="cant-click">
                                        <a href="#" title="Option 02 (Can’t Click)" class="disabled">Option 02 (Can’t Click)</a>
                                    </li>
                                    <li class="cant-click">
                                        <a href="#" title="Option 03 (Can’t Click)" class="disabled">Option 03 (Can’t Click)</a>
                                    </li>
                                    <li>
                                        <a href="#" title="Option 04 (Anchor Link to Title)">Option 04 (Anchor Link to Title)</a>
                                    </li>
                                    <li>
                                        <a href="#" title=" Option 05 (Anchor Link to Title)"> Option 05 (Anchor Link to Title)</a>
                                    </li>
                                    <li class="cant-click">
                                        <a href="#" title="Option 01 (Anchor Link to Title)" class="disabled">Option 06 (Can’t Click)</a>
                                    </li>
                                    <li class="cant-click">
                                        <a href="#" title="Option 01 (Anchor Link to Title)" class="disabled"> Option 07 (Can’t Click)</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="details-slider1-main">
                        <div class="detail-slider" style={{ backgroundImage: "url(" + ServiceDeet1 + ")" }}>
                            <div class="slider-arrow-pagination">
                                <div class="slider-arrow">
                                    <ul>
                                        <li>
                                            <a href="#" title="next" class="next">
                                                <img src={NextArrw} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="prev" class="prev">
                                                <img src={PrevArrw} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="slider-pagination">
                                    <a href="#" title=""><img src={NumberImg} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-info-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="service-details-info">
                                        <h3>Frontend Development</h3>
                                        <p>Listicle single-origin coffee neutra butcher tumblr shoreditch small batch authentic
                                    aesthetic typewriter.</p>
                                        <p>Vexillologist gochujang organic selfies. Intelligentsia squid cornhole church-key
                                        truffaut,
                                    air plant yr hoodie messenger.</p>
                                    </div>
                                    <div class="service-details-info">
                                        <h3>Web Application</h3>
                                        <p>Vexillologist gochujang organic selfies. Intelligentsia squid cornhole church-key
                                        truffaut, air plant yr hoodie messenger. Listicle single-origin coffee neutra butcher
                                    tumblr shoreditch small batch authentic aesthetic typewriter. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- services detail end -->
        <!-- case study start --> */}
                <section class="case-study-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <h2>case studies</h2>
                            </div>
                            <div class="col-lg-4 col-md-4 casestudy-title">
                                <ul>
                                    <li><a href="#" title="Case Study Title 01">Downtown Market</a></li>
                                    <li><a href="#" title="Case Study Title 01">SGC Modern Homes</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-4 casestudy-title">
                                <ul>
                                    <li><a href="#" title="Case Study Title 01">Imperial Theatre</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- case study end -->
        <!-- case study start --> */}
                <section class="serv-details-bottm-slider">
                    <div class="detail-slider-bottom" style={{ backgroundImage: "url(" + ServiceDeetBtm + ")" }}>
                        <div class="slider-arrow-pagination">
                            <div class="slider-arrow">
                                <ul>
                                    <li>
                                        <a href="#" title="next" class="next">
                                            <img src={NextArrw} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="prev" class="prev">
                                            <img src={PrevArrw} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="slider-pagination">
                                <a href="#" title=""><img src={NumberImg} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        )
    }
}

export default Branding
