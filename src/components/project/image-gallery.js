import React from "react";
import LazyLoad from "react-lazyload";
import "../../css/components/image-gallery.css";

class ImageGallery extends React.Component {
  render() {
    return (
      <LazyLoad height={200} once offset={400}>
        <section className="image-gallery">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 img-gallery-left">
                <img src={this.props.photo1} alt="" />
              </div>
              <div className="col-lg-5 col-md-5 img-gallery-right">
                <div className="gallery-middle">
                  <img src={this.props.photo2} alt="" />
                </div>
                <div className="gallery-last">
                  <img src={this.props.photo3} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
    );
  }
}

export default ImageGallery;
