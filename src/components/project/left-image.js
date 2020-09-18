import React from "react";
import LazyLoad from "react-lazyload";
import "../../css/components/left-image.css";

class LeftImage extends React.Component {
  render() {
    return (
      <LazyLoad height={200} once offset={400}>
        <section className="left-img-block">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="left-img-blck">
                  <img src={this.props.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
    );
  }
}

export default LeftImage;
