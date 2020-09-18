import React from "react"

import PrevArrow from "../../images/prev-arrow-white.svg"
import NextArrow from "../../images/next-arrow-white.svg"
import { gsap, Power2 } from "gsap"
import styled from "styled-components"
import LazyLoad from "react-lazyload"
import "../../css/components/video-text.css"
import number from "../../images/nav-number.svg"
import mobileNumber from "../../images/number-mob.svg"
import prevMobile from "../../images/prev-mobile.svg"
import nextMobile from "../../images/next-mobile.svg"

class VideoText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videoNum: 0,
      videoStatus: "pause",
      videoMax: this.props.videos.length - 1,
    }
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
    if (this.state.videoStatus === "play") {
      gsap.to(".watch-video span", 0.5, {
        opacity: 0,
      })
      // this.state.currentVideo.play();
      this.refs.vidRef.play()
    } else {
      gsap.to(".watch-video span", 0.5, {
        opacity: 1,
      })
      // this.state.currentVideo.pause();
      this.refs.vidRef.pause()
    }
  }

  nextVid = () => {
    if (this.state.videoNum === this.state.videoMax) {
      this.setState({
        videoNum: 0,
      })
    } else {
      this.setState({
        videoNum: this.state.videoNum + 1,
      })
    }
  }

  VideoBG = styled.section`
    ::before {
      background: ${this.props.colour} !important;
    }
  `

  render() {
    const VideoBG = this.VideoBG
    const { text, line, videos, colour, textColor, noNavigation } = this.props
    const { videoNum } = this.state
    return (
      <LazyLoad height={200} once offset={400}>
        <VideoBG className="project-video">
          <div className="video-content" style={{ backgroundColor: colour }}>
            <p style={textColor ? { color: { textColor } } : { color: "#fff" }}>
              {text}
            </p>
            <img src={line} />
          </div>
          <div className="video-img-main">
            <div className="video-img">
              <video
                src={videos[videoNum].video}
                onClick={this.handleVideo}
                ref="vidRef"
              />
              <div className="watch-video">
                <span>Watch Video</span>
              </div>
            </div>
            <div
              className="slider-arrow-pagination"
              style={noNavigation ? { display: "none" } : null}
            >
              <div className="slider-arrow">
                <ul>
                  <li>
                    <div onClick={this.nextVid} title="next" className="next">
                      <img src={NextArrow} alt="" />
                    </div>
                  </li>
                  <li>
                    <div onClick={this.nextVid} title="prev" className="prev">
                      <img src={PrevArrow} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="vertical-text" style={{ color: colour }}>
                {videos[videoNum].name}
              </div>
              <div className="slider-pagination" style={{ color: colour }}>
                <span className="vertical-num">
                  {videoNum + 1} / {videos.length}
                </span>
              </div>
            </div>
            <div
              className="mobile-navigation"
              style={noNavigation ? { display: "none" } : null}
            >
              <div className="mobile-navigation-flex">
                <div className="left-side-navigation">
                  <div className="nav-mob-btn" onClick={this.nextVid}>
                    <span className="next">
                      <img src={nextMobile} alt="nextMobile" />
                    </span>
                  </div>{" "}
                  <div className="nav-mob-btn" onClick={this.nextVid}>
                    <span className="prev">
                      <img src={prevMobile} alt="prevMobile" />
                    </span>
                  </div>
                  <div
                    className="mobile-number"
                    style={colour ? { color: colour } : null}
                  >
                    {videoNum + 1} / {videos.length}
                  </div>
                </div>
                <div className="right-side-navigation">
                  <div
                    className="mobile-vertical-text"
                    style={{ color: colour }}
                  >
                    {videos[videoNum].name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VideoBG>
      </LazyLoad>
    )
  }
}

export default VideoText
