import React from "react";
import { gsap } from "gsap";

class ContactFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount() {
    this.myTween = gsap.fromTo(this.myElement, 1, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
  }

  renderAn(project) {
    // Get first letter of project
    if (project === "advertising") {
      return "an";
    } else {
      return "a";
    }
  }

  renderSelect(selectItem) {
    if (selectItem === "building brands") {
      return (
        <select name="project" onChange={this.props.changeAction}>
          <option>Branding</option>
          <option>Creative Direction</option>
        </select>
      );
    } else if (selectItem === "creating products") {
      return (
        <select name="project" onChange={this.props.changeAction}>
          <option>Develop</option>
          <option>Research & Strategy</option>
        </select>
      );
    } else if (selectItem === "transforming business") {
      return (
        <select name="project" onChange={this.props.changeAction}>
          <option value="advertising">Advertising</option>
          <option>High Fives</option>
        </select>
      );
    } else {
      // This will just be the default since props won't be in initial render

      return (
        <select>
          <option>Branding</option>
          <option>Creative Direction</option>
        </select>
      );
    }
  }

  render() {
    if (this.props.section === "start_project") {
      return (
        <div>
          <div
            className="form-middle-info"
            // ref={div => (this.myElement = div)}
            id="second-part"
          >
            <div className="form-group half select-w3">
              <label>Tap your skills in</label>
              <select onChange={this.props.changeAction} name="service">
                <option value="building brands">building brands</option>
                <option value="creating products">creating products</option>
                <option value="transforming business">transforming business</option>
              </select>
            </div>
            <div className="form-group half select-w4">
              <label>for a</label>

              {this.renderSelect(this.props.options.service)}
              <span>project. </span>
            </div>
            <div className="form-group full select-w5">
              <label>Our budget is</label>
              <select>
                <option>$ 3000 - $ 4,999</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
              <span>and we would like to get started as early as</span>
            </div>
            <div className="form-group half select-w6">
              <select>
                <option>time frame 01</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
            <div className="form-group half select-w7">
              <label>and completed within</label>
              <select name="action2">
                <option>time frame 02.</option>
                <option value="meeting">Meeting</option>
                <option>lorem</option>
              </select>
            </div>
          </div>

          <div className="form-bottm-info">
            <div className="form-group half select-w8">
              <label>I’d like to plan a</label>
              <select>
                <option>meeting</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
            <div className="form-group half select-w9">
              <label>over a</label>
              <select>
                <option>choice of beverage</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
            <div className="form-group half input3">
              <label>You can reach me at</label>
              <input type="number" className="form-control" placeholder="phone number" />
            </div>
            <div className="form-group half input4">
              <label>or by email at</label>
              <input type="email" className="form-control" placeholder="email." />
            </div>
          </div>
          <div className="cya-tmrw">
            <div className="form-group half">
              <label className="d-none d-sm-block">Cya tmrrw</label>
              <label className="d-block d-sm-none">Cya friend</label>
              <img src="images/smiley.png" alt="" />
            </div>
          </div>
          <div className="submit-form">
            <button type="submit" className="secondary-btn btns">
              <span>Submit Form</span>
            </button>
          </div>
        </div>
      );
    } else if (this.props.section === "chat") {
      return (
        <div>
          <div className="form-middle-info c-form2">
            <div className="form-group half select-w10">
              <label>Let's chat</label>
              <select>
                <option>in person</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
            <div className="form-group half select-w11">
              <label>to discuss</label>
              <select>
                <option>a partnership</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
            <div className="form-group half input3">
              <label>You can reach me at</label>
              <input type="number" className="form-control" placeholder="phone number" />
            </div>
            <div className="form-group half input4">
              <label>or by email at</label>
              <input type="email" className="form-control" placeholder="email." />
            </div>
          </div>
          <div className="cya-tmrw">
            <div className="form-group half">
              <label>Cya friend</label>
              <img src="images/smiley.png" alt="" />
            </div>
          </div>
          <div className="submit-form">
            <button type="submit" className="secondary-btn btns">
              <span>Submit Form</span>
            </button>
          </div>
        </div>
      );
    } else if (this.props.section === "cowork") {
      return (
        <div>
          <div className="form-middle-info" id="second-part">
            <div className="form-group md4">
              <label>I'm a</label>
              <input type="text" className="form-control" placeholder="fill in blank" name="name" />
            </div>
            <div className="form-group lg5 input6">
              <label>currently working from</label>
              <input
                type="text"
                className="form-control form-control-lg5"
                placeholder="fill in blank"
                name="working from"
              />
            </div>
            <div className="form-group full select-w12 border-color-white-span">
              <label>I’m looking for a place to work</label>
              <select>
                <option>choose hours</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
              <span>per week, where I have</span>
            </div>
            <div className="form-group half select-w6">
              <select>
                <option>choose option</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
          </div>

          <div className="form-middle-info-second" id="second-part">
            <div className="form-group full select-w8">
              <label>I need a place to start working at</label>
              <select>
                <option>choose option</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
          </div>

          <div className="form-bottm-info">
            <div className="form-group half input3">
              <label>You can reach me at</label>
              <input type="number" className="form-control" placeholder="phone number" />
            </div>
            <div className="form-group half input4">
              <label>or by email at</label>
              <input type="email" className="form-control" placeholder="email." />
            </div>
          </div>
          <div className="cya-tmrw">
            <div className="form-group half">
              <label className="d-none d-sm-block">Cya tmrrw</label>
              <label className="d-block d-sm-none">Cya friend</label>
              <img src="images/smiley.png" alt="" />
            </div>
          </div>
          <div className="submit-form">
            <button type="submit" className="secondary-btn btns">
              <span>Submit Form</span>
            </button>
          </div>
        </div>
      );
    } else if (this.props.section === "meeting") {
      return (
        <div>
          <div className="form-bottm-info">
            <div className="form-group half select-w8">
              <label>I’d like to plan a</label>
              <select>
                <option>meeting</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
            <div className="form-group half select-w9">
              <label>over a</label>
              <select>
                <option>choice of beverage</option>
                <option>lorem</option>
                <option>lorem</option>
              </select>
            </div>
            <div className="form-group half input3">
              <label>You can reach me at</label>
              <input type="number" className="form-control" placeholder="phone number" />
            </div>
            <div className="form-group half input4">
              <label>or by email at</label>
              <input type="email" className="form-control" placeholder="email." />
            </div>
          </div>
          <div className="cya-tmrw">
            <div className="form-group half">
              <label className="d-none d-sm-block">Cya tmrrw</label>
              <select>
                <option value="">😍</option>
                <option value="">🤔</option>
                <option value="">😎</option>
              </select>
              <label className="d-block d-sm-none">Cya friend</label>
            </div>
          </div>
          <div className="submit-form">
            <button type="submit" className="secondary-btn btns">
              <span>Submit Form</span>
            </button>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default ContactFormSection;
