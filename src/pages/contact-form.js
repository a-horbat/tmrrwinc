import React from "react"
import ContactFormSection from "../components/contact-form-section"
import SEO from "../components/seo"
import { gsap } from "gsap"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    const company =
      typeof window !== "undefined" && window.history.state.company
        ? window.history.state.company
        : ""
    this.state = {
      name: "",
      company: company,
      heard: "",
      action1: "",
    }
    this.myElement = null
    this.headerText = null
    this.myTween = null
  }

  componentDidMount() {
    this.myTween = gsap
      .timeline()
      .fromTo("header", 0.5, { opacity: 0 }, { opacity: 1 })
      .fromTo(this.myElement, 1, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
  }


  changeAction = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <SEO
          title={"Contact Us"}
          description={"TMRRW INC is a creative agency in Sarnia Ontario."}
        />
        <section class="contact-form-main">
          <div class="container" style={{ marginBottom: 50 }} ref={div => (this.myElement = div)}>
            <div class="row">
              <div class="col-lg-6 col-md-6 contact-form-left">
                <h1>You’re Next.</h1>
              </div>
              <div class="col-lg-6 col-md-6 contact-form-right">
                <p>
                  We have a good reputation for getting it done right the first
                  time. Let’s turn your vision into reality.
                </p>
              </div>
              <div class="common-form contact-forms">
                <div class="inner-form">
                  <h3>Hey you guys </h3>
                  <form>
                    <div class="form-group half">
                      <label>My name is</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="your name"
                        name="name"
                        onChange={this.changeAction}
                        value={this.state.name}
                      />
                    </div>
                    <div class="form-group half">
                      <label>from</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="company name."
                        name="company"
                        onChange={this.changeAction}
                        value={this.state.company}
                      />
                    </div>
                    <div class="form-group full select-w1">
                      <label>I heard about you through</label>
                      <select>
                        <option value="">drop down here</option>
                        <option>a colleague</option>
                        <option>a Google search</option>
                        <option>from your previous work</option>
                        <option>
                          a suspiciously intelligent talking squirrel
                        </option>
                      </select>
                    </div>
                    <div class="form-group full select-w2">
                      <label>and I would like to</label>
                      <select
                        onChange={this.changeAction}
                        value={this.state.action1}
                        name="action1"
                      >
                        <option value="">drop down here</option>
                        <option value="start_project">start a project.</option>
                        <option value="chat">chat with you.</option>
                        <option value="cowork">co-work with you.</option>
                      </select>
                    </div>
                    {!this.state.action1 ? (
                      ""
                    ) : (
                        <ContactFormSection
                          section={this.state.action1}
                          changeAction={this.changeAction}
                          options={this.state}
                        />
                      )}
                    {!this.state.action1 ? (
                      ""
                    ) : (
                        <ContactFormSection
                          section={this.state.action2}
                          changeAction={this.changeAction}
                          options={this.state}
                        />
                      )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ContactForm
