import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import FooterLogo from "../images/tmrrwinclogowhite.png";

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <h2>Let’s Work Together</h2>
          </div>
          <div className="col-lg-3 col-md-4">
            <Link className="secondary-btn btns" to="/contact/">
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="lets-together-form common-form">
              <div className="inner-form">
                <h3>Hey you guys </h3>
                <form>
                  <div className="form-group half">
                    <label>My name is</label>
                    <input type="text" className="form-control" placeholder="your name" />
                  </div>
                  <div className="form-group half">
                    <label>from</label>
                    <input type="text" className="form-control" placeholder="company name." />
                  </div>
                  <div className="form-group full select-w1">
                    <label>I heard about you through</label>
                    <select>
                      <option>drop down here</option>
                      <option>lorem</option>
                      <option>lorem</option>
                    </select>
                  </div>
                  <div className="form-group full select-w2">
                    <label>and I would like to</label>
                    <select>
                      <option>start a project.</option>
                      <option>lorem</option>
                      <option>lorem</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 footer-left-links col-6">
            <ul>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/services/">Services</Link>
              </li>
              <li>
                <Link to="/work/">Work</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 footer-right-links col-6">
            <div className="interior-design">Creative Canadian Agency</div>
            <ul className="social-footer">
              <li>
                <a
                  href="https://www.youtube.com/channel/UCfIZhSJFSRSoIkbz8WqBqAQ"
                  title="Youtube"
                  target="_blank"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/tmrrwinc" title="Instagram" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/tmrrwinc" title="Youtube" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="btm-ftr">
            <ul>
              <a href="https://g.page/tmrrwinc?share" target="_blank">
                <li> 140 Christina Street N, Sarnia, Ontario, N7T 5T9</li>
              </a>
              <li className="d-none d-sm-block">
                <a href="tel:15193310256">1 (519) 331-0256</a>
              </li>
              <li className="with-underline d-block d-sm-none">
                <a href="#">Book a call</a>
              </li>
              <li className="with-underline">
                <a href="mailto:contact@tmrrwinc.ca" title="Mail us">
                  contact@tmrrwinc.ca
                </a>
              </li>
            </ul>
            <div className="btm-left-footer">
              <Link to="/" title="Logo" className="footer-logo">
                <img src={FooterLogo} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-wipe"></div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
