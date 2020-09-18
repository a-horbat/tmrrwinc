import React from "react"
import styled from "styled-components"
import LazyLoad from "react-lazyload"
import "../../css/components/hover-play.css"

// const pathnameLocation =
//   typeof window !== "undefined" ? window.location.pathname : ""
// const changeToBlack = pathnameLocation === "/work/altspace/"

class HoverPlay extends React.Component {
  playVideo = () => {
    this.refs.videoPlay.play()
  }

  pauseVideo = () => {
    this.refs.videoPlay.pause()
  }

  render() {
    const {
      correct,
      phone,
      verticalText,
      video,
      image,
      colour,
      changeToBlack,
      bottom,
    } = this.props
    const mobileBlock = styled.section`
      ::before {
        background: ${colour} !important;
      }
    `
    const playTextStyle = {
      width: "22px",
      height: "22px",
      display: "inline-block",
      marginRight: "12px",
    }
    const playButtonStyle = { padding: "0px", margin: "0px" }
    return (
      <LazyLoad height={200} once offset={600}>
        <section
          className="image-logo-block"
          style={bottom ? { marginBottom: bottom } : null}
        >
          <div className="container">
            <div className="row">
              <div
                className={
                  changeToBlack
                    ? "col-lg-4 col-md-5 mobile-block mobile-block-alt"
                    : "col-lg-4 col-md-5 mobile-block"
                }
              >
                <div className="mobile-img">
                  <img src={phone} alt="" />
                </div>
                <div
                  className={
                    correct
                      ? "vertical-logo vertical-logo-alt"
                      : "vertical-logo "
                  }
                >
                  {verticalText ? (
                    <img
                      src={verticalText}
                      alt=""
                      className={correct ? "altimage" : "imageX"}
                    />
                  ) : null}
                </div>
              </div>

              <div className="col-lg-8 col-md-7">
                <div className="hover-play-block">
                  <video
                    ref="videoPlay"
                    src={video}
                    onMouseEnter={this.playVideo}
                    onMouseLeave={this.pauseVideo}
                  ></video>

                  <div
                    className="play-on-hover"
                    onClick={this.playVideo}
                    onMouseLeave={this.pauseVideo}
                  >
                    <a href="#" title="Hover to Play" className="hide-mobile">
                      <span style={correct ? playButtonStyle : null}>
                        <img src={image} alt="" style={playTextStyle} />
                        Hover to Play
                      </span>
                    </a>
                    <a href="#" title="Tap to Play" className="show-mobile">
                      <span>
                        <img src={image} alt="" style={playTextStyle} />
                        Tap to Play
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
    )
  }
}

export default HoverPlay
