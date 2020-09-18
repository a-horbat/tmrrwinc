import React from "react"
import "../../css/components/two-cards.css"

class TwoCards extends React.Component {
  render() {
    return (
      <section className="section-style">
        <div className="white-big-block">
          <div className="black-little-block">
            <img className="image-logo" src={this.props.images[1]} alt="" />
            <div className="block-text">
              <span className="text-title">
                <div className="square-logo"></div>
                Sarnia coworking
              </span>
              <br />
              <span className="text-title_little">136 Christina St N.</span>
              <br />
              <span className="text-title_little">Sarnia, ON N7T 5T9</span>
            </div>
          </div>
        </div>
        <div className="black-big-block">
          <div className="white-little-block">
            <img
              className="image-logo"
              src={this.props.images[0]}
              alt="Alt Logo White"
            />
            <div className="text-little">
              <span> altspaceco.work</span>
              <br />
              <span> contact@altspaceco.work</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TwoCards
