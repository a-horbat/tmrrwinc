import React from "react";
import LazyLoad from "react-lazyload";

import "../../css/components/banner.css";

class NextProject extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { mobileStyle: document.body.clientWidth < 479 }
  //   this.calculateSize = this.calculateSize.bind(this)
  // }
  // calculateSize() {
  //   let mobileStyle = false
  //   if (document.body.clientWidth < 479) {
  //     mobileStyle = true
  //   }
  //   this.setState({ mobileStyle })
  // }
  // componentDidMount() {
  //   this.calculateSize()
  //   window.addEventListener("resize", this.calculateSize)
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.calculateSize)
  // }

  render() {
    const {
      title,
      subtitle,
      image,
      backgroundColor,
      backgroundColorMob = backgroundColor,
      skull,
      mobLogo,
      deskLogo,
    } = this.props;
    const imageMob = {
      backgroundImage: `url(${image})`,
      backgroundColor: backgroundColorMob,
      backgroundPosition: skull ? "right" : "center",
    };
    const styleDesk = {
      backgroundImage: `url(${image})`,
      backgroundColor: backgroundColor,
      backgroundPosition: skull ? "right" : "center",
    };

    return (
      <LazyLoad height={200} once offset={400}>
        <div>
          <section className="project-upnext">
            <h3>Up Next: {this.props.title}</h3>
          </section>
          <div className="next-section-container">
            <section
              className="next-project"
              style={styleDesk}
              // style={this.state.mobileStyle ? imageMob : styleDesk}
            >
              <div className="vertical-middle">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 project-title">
                      <h4 style={{ paddingBottom: "5px" }}>{subtitle}</h4>
                      <div
                        style={{
                          width: "50px",
                          height: "0px",
                          border: "1px solid #FFFFFF",
                          opacity: "0.5",
                        }}
                      />
                      <h1 className={title === "Alt space" ? "title-altspace" : ""}>{title}</h1>
                    </div>
                    {title === "Alt space" ? (
                      <>
                        <img src={mobLogo} alt="mobLogo" className="logo-desktop logo-down" />
                        <img src={deskLogo} alt="deskLogo" className="logo-mobile" />
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </LazyLoad>
    );
  }
}

export default NextProject;
