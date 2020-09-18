import Link from "gatsby-plugin-transition-link"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { gsap, Power2 } from "gsap"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"

import WhiteLogo from "../images/tmrrwinclogowhite.png"
import Logo from "../images/tmrrwinclogo.png"
import MenuToggle from "../images/menu-toggle.png"
import WhiteMenuToggle from "../images/white-menu-icon.png"
import WhiteMenuCross from "../images/white-menu-close.png"
import HamburgerMenu from "react-hamburger-menu"

const RightMenu = () => (
  <div className="right-menu">
    <div className="interior-design">Creative Canadian Agency</div>
    <div className="header-add">
      <span>
        {" "}
        140 Christina Street North,
        <br /> Sarnia, Ontario, N7T 5T9{" "}
      </span>
    </div>
    <div className="social">
      <ul>
        <li>
          <a href="#" title="Youtube" target="_blank">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Instagram" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" title="Youtube" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

const open = () => {
  document.getElementsByTagName("header")[0].classList.add("menu-open")
  document.getElementsByTagName("body")[0].classList.add("menu-overlay")
  document.getElementsByClassName("menu-open-content")[0].style.display =
    "block"
  const headerTL = gsap.timeline()

  headerTL
    .fromTo(
      "header",
      1,
      {
        height: "0vh",
      },
      {
        height: "100vh",
        ease: Power2.easeOut,
      }
    )
    .from(
      ".middle-menu",
      0.3,
      {
        height: 0,
        opacity: 0,
      },
      "-=0.9"
    )
    .from(
      ".middle-menu ul li",
      1,
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.5"
    )
    .from(
      ".middle-menu .bottom-menu",
      0.8,
      {
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.5"
    )
    .from(
      ".left-menu",
      0.4,
      {
        y: -30,
        opacity: 0,
      },
      "-=0.8"
    )
    .from(
      ".right-menu",
      0.4,
      {
        y: -30,
        opacity: 0,
      },
      "-=0.8"
    )
}

const close = () => {
  const headerTL = gsap.timeline()

  headerTL.fromTo(
    "header",
    1,
    {
      height: "100vh",
    },
    {
      height: "0vh",
      ease: Power2.easeOut,
      onComplete: function() {
        document.getElementsByTagName("header")[0].classList.remove("menu-open")
        document
          .getElementsByTagName("body")[0]
          .classList.remove("menu-overlay")
        document.getElementsByClassName("menu-open-content")[0].style.display =
          "none"
      },
    }
  )
}

const exitAnimation = () => {
  const headerTL = gsap.timeline()

  headerTL
    .to(".menu-open-content", 0.5, {
      opacity: 0,
    })
    .fromTo(
      "header",
      0.7,
      {
        delay: 0.2,
        height: "100vh",
      },
      {
        height: "0vh",
        onComplete: function() {
          document
            .getElementsByTagName("header")[0]
            .classList.remove("menu-open")
          document
            .getElementsByTagName("body")[0]
            .classList.remove("menu-overlay")
          document.getElementsByClassName(
            "menu-open-content"
          )[0].style.display = "none"
        },
      }
    )
    .set(".menu-open-content", { opacity: 1 })
}

const Header = ({ siteTitle, whiteNav, changeHeaderButton }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onExit = () => {
    exitAnimation()
    setIsOpen(false)
  }
  return (
    <header>
      <div className={whiteNav ? "white-header container" : "container"}>
        <div className="row">
          <div className="col-lg-12 col-md-12 header-position">
            <Link
              to="/"
              className="logo"
              exit={{
                trigger: onExit,
              }}
              entry={{}}
            >
              {!whiteNav ? (
                <img src={Logo} alt="" className="menu-close-logo" />
              ) : (
                <img src={WhiteLogo} alt="" className="menu-close-logo" />
              )}
              <img src={WhiteLogo} alt="" className="menu-open-logo" />
            </Link>
            <div className="header-right">
              <nav>
                <div className="menu">
                  <ul>
                    {!changeHeaderButton ? (
                      <li>
                        <Link to="/contact-form/">Let’s Work Together</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/contact-form/">Contact Us</Link>
                      </li>
                    )}
                  </ul>
                  <div className="menu-toggle">
                    <HamburgerMenu
                      isOpen={isOpen}
                      menuClicked={() => {
                        if (isOpen) close()
                        else open()
                        setIsOpen(!isOpen)
                      }}
                      width={45}
                      height={15}
                      strokeWidth={3}
                      rotate={0}
                      color={whiteNav || isOpen ? "white" : "black"}
                      borderRadius={0}
                      animationDuration={0.5}
                    />
                  </div>
                </div>
              </nav>
            </div>
            <div className="menu-open-content">
              <div className="d-flex-align-center">
                <div className="left-menu">
                  <div className="header-mail header-vertical-text">
                    <a href="mailto:contact@tmrrwinc.ca" title="mailus">
                      sales@tmrrwinc.ca
                    </a>
                  </div>
                  <div className="header-contact header-vertical-text">
                    <a href="#" title="Book a Call">
                      1 (519) 331-0256
                    </a>
                  </div>
                  <div className="header-contact-book-call">
                    <a href="#" title="Book a Call">
                      Book a Call
                    </a>
                  </div>
                </div>

                <div className="middle-menu">
                  <div className="middle-menu-container ">
                    <ul>
                      <li>
                        <Link
                          to="/about/"
                          exit={{
                            trigger: onExit,
                          }}
                          entry={{}}
                        >
                          about
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/"
                          exit={{
                            trigger: onExit,
                          }}
                          entry={{}}
                        >
                          services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/work/"
                          exit={{
                            trigger: onExit,
                          }}
                          entry={{}}
                        >
                          work
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact/"
                          exit={{
                            trigger: onExit,
                          }}
                          entry={{}}
                        >
                          contact
                        </Link>
                      </li>
                    </ul>

                    <div className="bottom-menu">
                      {/* <Link to="#" exit={{
                      trigger: onExit,
                    }}
                      entry={{
                      }}>
                      Blog
                    </Link>
                    <Link to="/careers/" exit={{
                      trigger: onExit,
                    }}
                      entry={{
                      }}>
                      Careers
                    </Link>
                    <Link to="#" exit={{
                      trigger: onExit,
                    }}
                      entry={{
                      }}>
                      Shop
                    </Link> */}
                    </div>
                  </div>
                  <div className="desktop-right-menu">
                    <RightMenu />
                  </div>
                </div>
                <div className="mobile-right-menu">
                  <RightMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
