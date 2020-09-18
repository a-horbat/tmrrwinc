import React from "react"
import "../../css/components/image-video-showcase.css"
import VisibilitySensor from "react-visibility-sensor"
import { gsap, Power2 } from "gsap"
import LazyLoad from "react-lazyload"

class ImageVideoShowcase extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videoNum: 0,
      videoStatus: "pause",
    }
  }

  handleVideo = (e, data) => {
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
      this.state.currentVideo.play()
    } else {
      gsap.to(".watch-video span", 0.5, {
        opacity: 1,
      })
      this.state.currentVideo.pause()
    }
  }
  handleView(isVisible) {
    if (isVisible) {
      const timeline = gsap.timeline()
      timeline
        .to(".project-varsity .char", 0.8, {
          y: 0,
          stagger: 0.05,
          ease: Power2.easeInOut,
        })
        .to(".project-varsity .project-details-info", 1, { opacity: 1 }, "-=1")
    }
  }

  render() {
    return (
      <LazyLoad height={200} once offset={400}>
        <section className="project-varsity">
          <div className="video-img">
            <video
              src={this.props.rightVideo}
              onClick={e => this.handleVideo(e)}
            ></video>
            <div className="watch-video">
              <a href="#" title="">
                <span className="watch-text">Watch Video</span>
              </a>
            </div>
          </div>
        </section>
      </LazyLoad>
    )
  }
}

export default ImageVideoShowcase
