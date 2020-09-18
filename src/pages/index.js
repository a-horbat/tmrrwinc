import React from "react"
import Modal from "react-modal"
import Helmet from "react-helmet"
import Splitting from "splitting"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import VisibilitySensor from "react-visibility-sensor"
import { gsap, Power2 } from "gsap"
import Link from "gatsby-plugin-transition-link"
import { StaticQuery, graphql } from "gatsby"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import ReactResizeDetector from "react-resize-detector"

import popupVideo from "../images/lc_vid1.mp4"

import SEO from "../components/seo"

import Design1 from "../images/design1.jpg"
import Design2 from "../images/design2.jpg"
import Design3 from "../images/design3.jpg"
import ServeNeed1 from "../images/serve-need1.jpg"
import ServeNeed2 from "../images/serve-need2.jpg"

class IndexPage extends React.Component {
  parallaxRef = React.createRef()

  constructor() {
    super()
    this.state = {
      showModal: false,
      videoStatus: "pause",
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  handleVideo = e => {
    if (this.state.videoStatus === "play") {
      this.setState(
        {
          videoStatus: "pause",
          currentVideo: e.target,
        },
        () => this.videoStatus()
      )
    } else {
      this.setState(
        {
          videoStatus: "play",
          currentVideo: e.target,
        },
        () => this.videoStatus()
      )
    }
  }

  videoStatus() {
    if (this.state.videoStatus == "play") {
      gsap.to(".watch-video span", 0.5, {
        opacity: 0,
      })
      this.state.currentVideo.play()
    } else {
      gsap.to(".watch-video span", 0.5, {
        opacity: 1,
      })
      this.state.currentVideo.pause()
    }
  }

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

  handleView(isVisible) {
    if (isVisible) {
      const timeline = gsap.timeline()
      timeline
        .to("#about-title .char", 0.8, {
          y: 0,
          stagger: 0.05,
          ease: Power2.easeInOut,
        })
        .to(
          "#gatsby-focus-wrapper > div > section.about-section > div > div > div.about-left.col-lg-6.col-md-6 > div > div > div",
          1,
          { opacity: 1 },
          "-=1"
        )
    }
  }

  handleView2(isVisible) {
    if (isVisible) {
      const timeline = gsap.timeline()
      timeline
        .to(".about-btm-section .char", 0.8, {
          y: 0,
          stagger: 0.05,
          ease: Power2.easeInOut,
        })
        .to(".about-btm-section .about-info", 1, { opacity: 1 }, "-=1")
    }
  }

  renderTags = categories => {
    const tags = []
    categories.map((category, i, arr) => {
      if (arr.length - 1 === i) {
        tags.push(`${category}`)
      } else {
        tags.push(`${category} -`)
      }
    })
    return tags
  }
  onResize = () => {
    this.parallaxRef.current.controller.update()
  }

  render() {
    return (
      <ParallaxProvider ref={this.parallaxRef}>
        <div>
          <ReactResizeDetector
            handleWidth
            handleHeight
            onResize={this.onResize}
          />
          <Modal
            isOpen={this.state.showModal}
            className="modal container"
            overlayClassName="overlay"
            contentLabel="Example Modal"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
          >
            <div className="video-img-main">
              <div class="video-img">
                <video src={popupVideo} onClick={this.handleVideo}></video>
                <div class="watch-video">
                  <span>Watch Video</span>
                </div>
              </div>
            </div>
          </Modal>
          <Helmet bodyAttributes={{ class: "home" }}></Helmet>
          <SEO
            title={"Creative agency in Sarnia Ontario"}
            description={"TMRRW INC is a creative agency in Sarnia Ontario."}
          />
          <section class="banner-section sky-gradient">
            <div class="banner-content vertical-middle">
              <h1 data-splitting="">
                {" "}
                We help bold influencers realize their digital potential through
                telling stories.
              </h1>
              <div class="demo-btn d-block">
                <a href="#" title="">
                  <img src="images/demo-btn.png" alt="" />
                </a>
              </div>
            </div>
            <div class="btn-container">
              <div
                class="demo-btn desktop-btn d-sm-block"
                onClick={this.handleOpenModal}
              >
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="play-button"
                >
                  <g id="text">
                    <circle
                      cx="65"
                      cy="65"
                      r="63.75"
                      fill="white"
                      stroke="#D24C2B"
                      stroke-width="2.5"
                    />
                    <path
                      d="M55.3131 26.5023L53.8151 14.5915L58.1178 14.0587C61.5417 13.6343 64.3237 15.5261 64.7972 19.2917C65.2707 23.0573 63.0215 25.5542 59.5975 25.9741L55.3131 26.5023ZM59.247 23.8339C61.2139 23.5901 62.7028 22.1768 62.3795 19.5897C62.0562 17.0025 60.2714 15.9776 58.309 16.2214L56.4286 16.4517L57.3847 24.0642L59.247 23.8339Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M74.5635 24.0551C73.958 25.4277 72.4873 26.4572 70.4339 26.1998C68.1482 25.9154 66.3407 24.0326 66.6958 21.2422C67.0327 18.6054 69.2137 17.138 71.3491 17.4044C73.9216 17.7249 75.2556 19.5491 74.9187 22.2039C74.8777 22.5245 74.8003 22.8541 74.7958 22.8902L68.8358 22.1452C68.7493 23.2424 69.5779 24.15 70.698 24.2899C71.7497 24.4209 72.3917 23.9739 72.756 23.265L74.5635 24.0551ZM72.8061 21.0887C72.8789 20.2624 72.4373 19.3865 71.1487 19.2285C69.9786 19.084 69.2228 19.8741 69.0771 20.6236L72.8061 21.0887Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M75.4514 26.403L78.7979 18.7634L80.7876 19.6213L80.3778 20.5514C81.1291 19.987 82.2901 20.0096 83.137 20.3753C84.1842 20.8268 84.8353 21.6395 84.8672 22.6329C85.8871 21.9646 86.8478 21.9737 87.8677 22.4116C89.2928 23.0257 90.2808 24.466 89.3839 26.5159L87.212 31.469L85.1905 30.5975L87.1756 26.0644C87.5353 25.2426 87.3987 24.4434 86.4471 24.0326C85.5547 23.6488 84.7215 24.1003 84.3618 24.9266L82.404 29.3965L80.3369 28.507L82.322 23.9739C82.6817 23.1521 82.5314 22.3484 81.5935 21.9421C80.6875 21.5492 79.8588 21.9872 79.4945 22.827L77.5367 27.3015L75.4514 26.403Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M97.2698 34.625C95.6125 36.5846 92.9535 36.8013 91.0321 35.203C89.1107 33.6046 88.8648 30.9678 90.5221 29.0082C92.1885 27.0396 94.8384 26.8319 96.7598 28.4348C98.6858 30.0286 98.9408 32.6519 97.2698 34.625ZM95.5305 33.1757C96.5504 31.9701 96.2818 30.7059 95.4349 30.0015C94.5835 29.2927 93.2858 29.252 92.266 30.4576C91.2552 31.6496 91.5147 32.9273 92.3616 33.6362C93.2084 34.3361 94.5106 34.3812 95.5305 33.1757Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M103.781 42.5355L103.148 41.488L99.1457 43.8584L97.93 41.8402L108.32 35.6816L110.747 39.7045C111.958 41.7092 111.334 43.8133 109.531 44.8834C108.079 45.7457 106.472 45.5516 105.265 44.4364L102.346 49.1637L100.999 46.9242L103.781 42.5355ZM105.875 42.084C106.49 43.0999 107.432 43.3482 108.284 42.847C109.162 42.3278 109.376 41.3932 108.762 40.3728L107.778 38.7473L104.892 40.4585L105.875 42.084Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M107.255 56.5143C105.743 56.5549 104.181 55.6655 103.549 53.7149C102.843 51.5386 103.794 49.1185 106.49 48.2562C109.04 47.4389 111.307 48.7799 111.967 50.8117C112.764 53.2634 111.662 55.232 109.094 56.0538C108.785 56.1531 108.448 56.2253 108.416 56.2344L106.572 50.5634C105.529 50.9517 105.056 52.0805 105.402 53.1415C105.725 54.1393 106.408 54.5276 107.209 54.5547L107.255 56.5143ZM109.222 53.6788C110.009 53.3944 110.619 52.6268 110.223 51.4032C109.864 50.2925 108.816 49.9493 108.07 50.1344L109.222 53.6788Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M108.275 65.7432C106.79 65.4587 105.456 64.2532 105.265 62.2124C105.051 59.9368 106.508 57.7785 109.331 57.5121C111.999 57.2638 113.92 59.0563 114.121 61.1829C114.362 63.743 112.86 65.4316 110.173 65.6845C109.85 65.7161 109.508 65.7116 109.472 65.7161L108.907 59.7832C107.806 59.9368 107.095 60.9391 107.2 62.0498C107.3 63.0928 107.878 63.6211 108.653 63.8198L108.275 65.7432ZM110.811 63.3953C111.639 63.2825 112.404 62.6684 112.286 61.3861C112.177 60.2212 111.23 59.6658 110.46 59.6839L110.811 63.3953Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M105.666 67.4048L118 68.222L117.85 70.4705L105.515 69.6533L105.666 67.4048Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M111.676 74.051C111.535 74.8502 110.797 75.3739 109.991 75.234C109.185 75.094 108.693 74.3535 108.835 73.5543C108.976 72.7552 109.695 72.2269 110.501 72.3669C111.307 72.5068 111.817 73.2518 111.676 74.051Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M104.632 76.0963L115.896 80.4941L114.307 84.4945C113.046 87.6776 110.037 89.1992 106.481 87.8086C102.925 86.4179 101.786 83.2663 103.052 80.0832L104.632 76.0963ZM105.115 80.7966C104.391 82.6252 104.928 84.5983 107.373 85.5555C109.818 86.5127 111.58 85.4517 112.304 83.623L112.996 81.8757L105.798 79.0673L105.115 80.7966Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M97.5657 94.0078C96.6415 92.8203 96.4411 91.0459 97.6568 89.3888C99.0091 87.5376 101.545 86.8739 103.835 88.5219C106.003 90.0842 106.253 92.6849 104.987 94.4142C103.462 96.4956 101.213 96.7801 99.0273 95.2088C98.7632 95.0192 98.5082 94.7934 98.4809 94.7754L102.01 89.9532C101.081 89.3482 99.8787 89.6327 99.2185 90.5402C98.5993 91.389 98.6858 92.1656 99.132 92.8203L97.5657 94.0078ZM101.035 93.9085C101.732 94.369 102.715 94.4097 103.48 93.3667C104.172 92.423 103.835 91.3845 103.243 90.8969L101.035 93.9085Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M95.0479 93.6601L100.211 100.234L98.4991 101.557L97.8708 100.753C98.0119 101.674 97.4337 102.681 96.7098 103.241C95.8083 103.937 94.7747 104.113 93.8823 103.666C93.987 104.876 93.5181 105.711 92.6393 106.384C91.4145 107.332 89.6661 107.503 88.2775 105.738L84.9309 101.476L86.6702 100.135L89.7344 104.036C90.2899 104.745 91.0594 105.007 91.8835 104.375C92.653 103.783 92.6484 102.839 92.0929 102.131L89.0697 98.2836L90.8499 96.911L93.9142 100.812C94.4696 101.521 95.2528 101.774 96.0632 101.151C96.8464 100.546 96.8509 99.6201 96.2863 98.8977L93.2631 95.0508L95.0479 93.6601Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M77.3318 108.723C76.3939 106.339 77.473 103.923 79.8133 103.015C82.1535 102.108 84.5985 103.16 85.541 105.539C86.4881 107.937 85.3999 110.339 83.0596 111.247C80.7193 112.154 78.2743 111.12 77.3318 108.723ZM79.4445 107.905C80.0227 109.373 81.2702 109.743 82.3038 109.341C83.3373 108.939 83.9976 107.829 83.4193 106.361C82.8456 104.912 81.5935 104.524 80.56 104.925C79.531 105.327 78.8662 106.438 79.4445 107.905Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M67.1967 110.578L68.426 110.533L68.253 105.914L70.6251 105.828L71.0713 117.825L66.3452 117.997C63.9913 118.082 62.4296 116.529 62.3522 114.448C62.2884 112.773 63.2309 111.468 64.8017 110.953L62.0243 106.14L64.6515 106.045L67.1967 110.578ZM66.5911 112.619C65.3982 112.664 64.7243 113.364 64.7607 114.348C64.7972 115.364 65.5211 115.996 66.7186 115.951L68.6309 115.884L68.5079 112.551L66.5911 112.619Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M53.1595 106.907C53.847 105.571 55.3814 104.636 57.4121 105.016C59.6749 105.44 61.3641 107.431 60.8405 110.19C60.3443 112.804 58.0723 114.132 55.9596 113.739C53.4099 113.26 52.1897 111.359 52.6905 108.732C52.7497 108.416 52.8499 108.09 52.8544 108.054L58.7598 109.165C58.9146 108.072 58.1406 107.12 57.0342 106.912C55.9961 106.718 55.3268 107.124 54.917 107.806L53.1595 106.907ZM54.7303 109.973C54.6074 110.795 54.9944 111.694 56.2692 111.933C57.4257 112.15 58.2316 111.405 58.4229 110.664L54.7303 109.973Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M44.5177 103.381C45.483 102.225 47.1858 101.643 49.0845 102.451C51.2017 103.354 52.4173 105.657 51.2973 108.239C50.241 110.682 47.7322 111.495 45.7562 110.651C43.3703 109.635 42.5963 107.517 43.6617 105.061C43.7892 104.767 43.9577 104.469 43.9714 104.438L49.4942 106.79C49.8858 105.756 49.3394 104.659 48.3059 104.216C47.3315 103.801 46.5894 104.058 46.043 104.636L44.5177 103.381ZM45.3783 106.713C45.0778 107.49 45.2599 108.452 46.4482 108.957C47.5319 109.418 48.4789 108.863 48.8295 108.185L45.3783 106.713Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M44.2992 100.311L37.6426 110.641L35.7303 109.427L42.3869 99.0963L44.2992 100.311Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M35.5299 102.334C34.8925 101.823 34.7787 100.934 35.2932 100.302C35.8077 99.6698 36.6955 99.5975 37.3375 100.103C37.9795 100.609 38.0979 101.489 37.5834 102.121C37.0689 102.758 36.1674 102.844 35.5299 102.334Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M37.1053 95.2224L27.817 102.921L25.0351 99.6201C22.8223 96.9968 22.9179 93.6511 25.8546 91.2175C28.7914 88.7838 32.1242 89.3121 34.337 91.9354L37.1053 95.2224ZM32.7116 93.3892C31.4413 91.8812 29.4379 91.4026 27.4163 93.0732C25.3993 94.7438 25.4949 96.7846 26.7652 98.2926L27.9809 99.7375L33.9181 94.8205L32.7116 93.3892Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M24.6162 80.4941C26.1096 80.2593 27.776 80.932 28.6639 82.7832C29.6565 84.8466 29.0327 87.3706 26.4738 88.5806C24.0516 89.723 21.6294 88.6935 20.7051 86.7656C19.5896 84.4403 20.4182 82.3453 22.8496 81.1939C23.141 81.0539 23.4643 80.9411 23.4961 80.9275L26.0823 86.3095C27.0612 85.7903 27.3845 84.6073 26.8973 83.5959C26.442 82.6478 25.7135 82.3543 24.9167 82.4311L24.6162 80.4941ZM23.0454 83.5598C22.3032 83.9481 21.7978 84.7879 22.3579 85.9483C22.8632 87.0049 23.9469 87.208 24.6617 86.9236L23.0454 83.5598Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M26.1324 78.4713L17.8412 79.7942L17.4952 77.6721L18.5059 77.5096C17.6226 77.189 17.0125 76.2047 16.8668 75.3017C16.6847 74.1819 17.0262 73.2022 17.8503 72.6423C16.7393 72.1547 16.2248 71.3419 16.0473 70.2583C15.8014 68.7367 16.4889 67.1338 18.7154 66.7772L24.0926 65.9193L24.4432 68.0775L19.5213 68.8631C18.6289 69.0076 18.0233 69.5494 18.1918 70.5698C18.3466 71.5225 19.1798 71.9741 20.0722 71.8296L24.9258 71.053L25.2855 73.2609L20.3636 74.0465C19.4712 74.191 18.8702 74.7463 19.0341 75.7532C19.1935 76.724 20.0085 77.1755 20.9191 77.031L25.7727 76.2544L26.1324 78.4713Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M21.3197 55.8235C23.8786 56.1441 25.4995 58.2436 25.1853 60.7134C24.8712 63.1831 22.7676 64.8131 20.2088 64.488C17.6363 64.1629 16.0291 62.0679 16.3432 59.5981C16.6574 57.1283 18.7427 55.4984 21.3197 55.8235ZM21.0329 58.0585C19.4575 57.8598 18.5333 58.7673 18.3921 59.86C18.251 60.9527 18.9203 62.0589 20.4956 62.2575C22.0528 62.4562 22.9953 61.5486 23.1364 60.456C23.2776 59.3633 22.6083 58.2571 21.0329 58.0585Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M24.516 46.1295L23.9651 47.2222L28.1357 49.2856L27.0748 51.3896L16.2476 46.0302L18.3602 41.8357C19.412 39.7452 21.5337 39.1311 23.4142 40.0567C24.9258 40.8062 25.6315 42.251 25.3356 43.8629L30.9268 43.7501L29.7521 46.0844L24.516 46.1295ZM23.0044 44.626C23.5371 43.5649 23.2411 42.6439 22.3533 42.2014C21.4381 41.7499 20.5275 42.075 19.9948 43.136L19.1434 44.8337L22.153 46.3237L23.0044 44.626Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M34.5146 35.6816C35.366 36.9232 35.4525 38.7067 34.1412 40.287C32.6751 42.0524 30.1072 42.5626 27.9172 40.7791C25.8455 39.0905 25.759 36.4762 27.1249 34.8282C28.7732 32.8416 31.0406 32.6926 33.1213 34.3948C33.3718 34.5979 33.6131 34.8417 33.6404 34.8643L29.8295 39.4652C30.7173 40.1244 31.9375 39.9122 32.6524 39.0498C33.3262 38.2371 33.2853 37.4605 32.88 36.7787L34.5146 35.6816ZM31.0497 35.5732C30.3804 35.072 29.4015 34.9727 28.5774 35.9705C27.8307 36.8735 28.1038 37.9301 28.6639 38.4538L31.0497 35.5732Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M41.7859 29.8345C42.3459 31.2297 42.05 32.9905 40.4245 34.2548C38.6124 35.668 35.9898 35.6229 34.2414 33.4105C32.5841 31.32 33.0667 28.7509 34.7559 27.4279C36.7957 25.8386 39.0404 26.1772 40.7068 28.2813C40.9071 28.5341 41.0893 28.8231 41.112 28.8457L36.3859 32.53C37.1144 33.3653 38.3483 33.415 39.2316 32.7242C40.0648 32.074 40.1923 31.3064 39.9419 30.5524L41.7859 29.8345ZM38.4211 28.9902C37.8793 28.358 36.9414 28.0555 35.9215 28.8502C34.9972 29.5726 35.0336 30.6607 35.4707 31.2929L38.4211 28.9902Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M44.6088 31.1168L38.6442 20.3843L40.6339 19.2962L46.5985 30.0286L44.6088 31.1168Z"
                      fill="#D04B2D"
                    />
                    <path
                      d="M47.0128 22.5065C47.7686 22.1949 48.611 22.5245 48.9251 23.274C49.2393 24.0235 48.8796 24.8363 48.1238 25.1478C47.368 25.4593 46.5302 25.1433 46.216 24.3938C45.9019 23.6443 46.257 22.818 47.0128 22.5065Z"
                      fill="#D04B2D"
                    />
                  </g>
                  <path
                    d="M52 78.5463V53.4533C52 51.6287 53.9489 50.4442 55.6003 51.2652L79.6342 63.2143C81.4153 64.0998 81.4651 66.5914 79.7206 67.5454L55.6867 80.6894C54.0317 81.5944 52 80.4134 52 78.5463Z"
                    fill="#D04B2D"
                  />
                </svg>
              </div>
            </div>
          </section>

          <section class="about-section">
            <div class="container">
              <div class="row">
                <div class="about-left col-lg-6 col-md-6">
                  <div class="about-info-main">
                    <VisibilitySensor
                      partialVisibility
                      onChange={this.handleView}
                    >
                      <div>
                        <h2 id="about-title" data-splitting="">
                          {" "}
                          A creative agency based in Sarnia.
                        </h2>
                        <div class="about-info">
                          <p>
                            We’re a creative agency that specializes in
                            development, design, and creative production for
                            good people that want to make a difference today.
                          </p>
                          <Link to="/about/" className="primary-btn btns">
                            <span>Learn more</span>
                          </Link>
                        </div>
                      </div>
                    </VisibilitySensor>
                  </div>
                </div>
                <div class="about-right col-lg-6 col-md-6">
                  <Parallax y={[15, -15]}>
                    <div class="about-big-img d-none d-sm-block">
                      <img src={Design1} alt="" className="rellax" />
                    </div>

                    <div class="about-middle-img">
                      <img src={Design2} alt="" className="rellax" />
                    </div>
                  </Parallax>

                  <div class="about-sm-img d-none d-sm-block">
                    <Parallax y={[8, -10]}>
                      <img src={Design3} alt="" className="rellax" />
                    </Parallax>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="our-work-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6 work-main">
                  <Link
                    to={this.props.projects[0].node.frontmatter.path}
                    className="work-bx"
                  >
                    {this.props.projects[0].node.frontmatter.tile.extension ===
                    "jpg" ? (
                      <img
                        src={
                          this.props.projects[0].node.frontmatter.tile.publicURL
                        }
                        alt=""
                      />
                    ) : (
                      <video
                        src={
                          this.props.projects[0].node.frontmatter.tile.publicURL
                        }
                        autoplay="autoplay"
                        loop
                      ></video>
                    )}
                    <div class="work-info">
                      <h3> {this.props.projects[0].node.frontmatter.title}</h3>
                      <span>
                        {this.renderTags(
                          this.props.projects[0].node.frontmatter.categories
                        )}
                      </span>
                    </div>
                  </Link>
                </div>
                <div class="col-lg-6 col-md-6 work-main">
                  <Link
                    to={this.props.projects[1].node.frontmatter.path}
                    className="work-bx"
                  >
                    {this.props.projects[1].node.frontmatter.tile.extension ===
                    "jpg" ? (
                      <img
                        src={
                          this.props.projects[1].node.frontmatter.tile.publicURL
                        }
                        alt=""
                      />
                    ) : (
                      <video
                        className="work-video"
                        src={
                          this.props.projects[1].node.frontmatter.tile.publicURL
                        }
                        autoplay="autoplay"
                        loop
                      ></video>
                    )}
                    <div class="work-info">
                      <h3> {this.props.projects[1].node.frontmatter.title}</h3>
                      <span>
                        {this.renderTags(
                          this.props.projects[1].node.frontmatter.categories
                        )}
                      </span>
                    </div>
                  </Link>
                </div>
                <div class="col-lg-6 col-md-6 work-main">
                  <Parallax y={[20, -20]}>
                    <Link
                      to={this.props.projects[2].node.frontmatter.path}
                      className="work-bx"
                    >
                      {this.props.projects[2].node.frontmatter.tile
                        .extension === "jpg" ? (
                        <img
                          src={
                            this.props.projects[2].node.frontmatter.tile
                              .publicURL
                          }
                          alt=""
                        />
                      ) : (
                        <video
                          src={
                            this.props.projects[2].node.frontmatter.tile
                              .publicURL
                          }
                          autoplay="autoplay"
                          loop
                        ></video>
                      )}
                      <div class="work-info">
                        <h3>
                          {" "}
                          {this.props.projects[2].node.frontmatter.title}
                        </h3>
                        <span>
                          {this.renderTags(
                            this.props.projects[2].node.frontmatter.categories
                          )}
                        </span>
                      </div>
                    </Link>
                  </Parallax>
                </div>
                <div class="col-lg-6 col-md-6 work-main">
                  <Parallax y={[20, -30]}>
                    <Link
                      to={this.props.projects[3].node.frontmatter.path}
                      className="work-bx"
                    >
                      {this.props.projects[3].node.frontmatter.tile
                        .extension === "jpg" ? (
                        <img
                          src={
                            this.props.projects[3].node.frontmatter.tile
                              .publicURL
                          }
                          alt=""
                        />
                      ) : (
                        <video
                          src={
                            this.props.projects[3].node.frontmatter.tile
                              .publicURL
                          }
                          autoplay="autoplay"
                          loop
                        ></video>
                      )}
                      <div class="work-info">
                        <h3>
                          {" "}
                          {this.props.projects[3].node.frontmatter.title}
                        </h3>
                        <span>
                          {this.renderTags(
                            this.props.projects[3].node.frontmatter.categories
                          )}
                        </span>
                      </div>
                    </Link>
                  </Parallax>
                </div>
                <div class="view-more">
                  <Link to="/work" className="primary-btn btns">
                    <span>View more work</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section class="about-btm-section sky-gradient-opposite">
            <div class="container">
              <div class="row">
                <div class="about-btm-left col-lg-6 col-md-6">
                  <div class="about-lft-img">
                    <Parallax y={[10, -15]}>
                      <img src={ServeNeed1} alt="" class="d-none d-sm-block" />
                      <img src={Design2} alt="" class="d-block d-sm-none" />
                    </Parallax>
                  </div>

                  <div class="about-btm-img d-none d-sm-block">
                    <img src={ServeNeed2} alt="" />
                  </div>
                </div>
                <div class="about-btm-right col-lg-6 col-md-6">
                  <VisibilitySensor
                    onChange={this.handleView2}
                    partialVisibility
                  >
                    <div class="about-info-main">
                      <h2 data-splitting=""> Here to serve you & your needs</h2>
                      <div class="about-info">
                        <p>
                          Our service listings help our partners get results,
                          achieve goals and make changes. We are confident in
                          work and services that we provide.
                        </p>
                        <Link to="/services/" className="primary-btn btns">
                          <span>Learn more</span>
                        </Link>
                      </div>
                    </div>
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ParallaxProvider>
    )
  }
}

// export default IndexPage
export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: { frontmatter: { posttype: { eq: "work" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              frontmatter {
                title
                categories
                path
                tile {
                  publicURL
                  extension
                }
              }
            }
          }
        }
      }
    `}
    render={({ projects }) => (
      <IndexPage projects={props.data.allMdx.edges} {...props} />
    )}
  />
)
