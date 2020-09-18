import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import { gsap, Power2 } from "gsap"
import LazyLoad, { forceCheck } from "react-lazyload"
import "../../css/components/campaign.css"
/* eslint-disable react/prop-types */

const Campaign = ({
  campaignheaderH2Color,
  campaignheaderH3Color,
  twoblocks,
  title,
  subtitle,
  description,
  image,
}) => {
  return (
    <LazyLoad height={200} once offset={500}>
      <section className="campaign-main">
        <div className="campaign-container">
          <div className="big-text-block">
            <h2 data-splitting="" style={{ color: campaignheaderH2Color }}>
              {title}
            </h2>
            <div className="text-blocks">
              {subtitle.map((block, i) => (
                <div className="small-text-block">
                  <h3 style={{ color: campaignheaderH3Color }}>{block}</h3>
                  <p>{description[i]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="campaign-img black-block">
            <img src={image} alt="" className="black-block-img" />
          </div>
        </div>
      </section>
    </LazyLoad>
  )
}

export default Campaign
