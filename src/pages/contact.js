import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Splitting from "splitting"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import { gsap, Power2, Expo } from "gsap"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// images
import Map from "../images/map.jpg"


class ContactPage extends React.Component {

  componentDidMount() {
    Splitting()
    // document.getElementsByTagName("body")[0].style.transform = null

    const contactTL = gsap.timeline();

    contactTL.to(".contact-info-left h1 .char", 1.3, {
      y: 0,
      stagger: 0.03,
      ease: Power2.easeInOut,
    })
      .from('.about-right-content p', 1.5, {
        opacity: 0
      })
  }

  render() {
    return (
      <ParallaxProvider>
        <div>
          <SEO
            description={"TMRRW INC is a creative agency in Sarnia Ontario."}
          />

          <section class="contact-main">
            <div class="vertical-middle">
              <div class="container">
                <div class="row flex-nowrap">
                  <div class="col-lg-8 col-md-8 contact-info-left">
                    <Parallax y={[50, -50]}>
                      <h1 data-splitting="">Don’t be shy, make the first move.</h1>
                    </Parallax>
                    <Parallax y={[20, -20]}>
                      <ul>
                        <li><Link to="/contact-form/" class="secondary-btn btns"
                          title="Contact Form"><span>Contact Form</span></Link></li>
                        <li><Link to="/careers/" class="white-btn btns contact-careers-btn"
                          title="Careers"><span>Careers</span></Link></li>
                      </ul>
                    </Parallax>
                    <div class="contact-bottm">
                      <ul class="contact-info-call">
                        <li><a href="#" title="Book a Call">Book a Call</a></li>
                        <li><a href="mailto:contact@tmrrwinc.ca" title="contact@tmrrwinc.ca">contact@tmrrwinc.ca</a></li>
                      </ul>
                      <ul class="social-contact">
                        <li>
                          <a href="#" title="Youtube" target="_blank"><i class="fa fa-youtube-play"
                            aria-hidden="true"></i></a>
                        </li>
                        <li>
                          <a href="#" title="Instagram" target="_blank"><i class="fa fa-instagram"
                            aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Youtube" target="_blank"><i class="fa fa-facebook-square"
                            aria-hidden="true"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contact-map">
                <iframe className="contact-map-iframe" id="gmap_canvas" src="https://maps.google.com/maps?q=140%20Christina%20Street%20North%20Sarnia&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
            </div>
          </section>
        </div>
      </ParallaxProvider>
    )
  }
}

export default ContactPage
