import React from "react"
import "../../css/components/right-image.css"
import LazyLoad from "react-lazyload"

class RightImage extends React.Component {
  render() {
    const { image, changes } = this.props
    const rightBlock = changes
      ? "right-img-blck right-img-blck_correct"
      : "right-img-blck"
    const rightImgBlock = changes
      ? "right-img-block right-img-block_correct"
      : "right-img-block"
    return (
      <LazyLoad height={200} once offset={600}>
        <section className={rightImgBlock}>
          <div className="container">
            <div className={rightBlock}>
              <img src={image} alt="" />
            </div>
          </div>
        </section>
      </LazyLoad>
    )
  }
}

export default RightImage
