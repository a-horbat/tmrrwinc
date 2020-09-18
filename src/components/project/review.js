import React from "react"
import { gsap } from "gsap"
import LazyLoad from "react-lazyload"
import "../../css/components/review.css"

class Review extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videoStatus: "pause",
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
      this.state.currentVideo.play()
    } else {
      gsap.to(".watch-video span", 0.5, {
        opacity: 1,
      })
      this.state.currentVideo.pause()
    }
  }

  render() {
    const { video, reviewheaderH3Color, title, description } = this.props

    return (
      <LazyLoad height={200} once offset={500}>
        <div className="text-video">
          <div className="video-block">
            <div className="video-image">
              <video src={video} onClick={this.handleVideo}></video>
              <div className="watch-videos video-arrow">
                <a href="#" title="">
                  <span className="video-click" style={{ marginTop: "0" }}>
                    Watch Video
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="reviews">
            {title.map((titleItem, index) => (
              <div className="reviews-text" key={index}>
                <h3 style={{ color: reviewheaderH3Color }}>{titleItem}</h3>
                <p>{description[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </LazyLoad>
    )
  }
}

export default Review
