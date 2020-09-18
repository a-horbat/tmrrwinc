import React from "react"

import { Link } from "gatsby"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {

  render() {
    return (
      <div>
        <SEO title="404: Not found" />
        <div className="top-error">
          <div className="vertical-middle">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h1 data-splitting="">Error 404</h1>
                  <div className="top-error-info">
                    <p>This page has been tossed to the garbage - guess it wasn’t a good idea after all.</p>
                    <ul>
                      <li><Link to="/contact-form/" class="secondary-btn btns"
                        title="Contact Form"><span>Contact Form</span></Link></li>
                      <li><Link to="/work/" class="white-btn btns"
                        title="work"><span>View our work</span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFoundPage