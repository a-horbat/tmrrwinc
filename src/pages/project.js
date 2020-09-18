import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/components/project-info.css"

// images
import ProjectImg from "../images/project-img.png"
import DummyImg1 from "../images/dummy-img1.jpg"
import DummyImg2 from "../images/dummy-img2.jpg"
import DummyImg3 from "../images/dummy-img3.jpg"
import DummyImg4 from "../images/dummy-img4.jpg"
import DummyImg5 from "../images/dummy-img5.jpg"
import DummyImg6 from "../images/dummy-img6.jpg"

class ProjectPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet bodyAttributes={{ class: "home" }}>
          <title>TMRRW INC | A Creative Agency</title>
        </Helmet>
        <SEO
          description={"TMRRW INC is a creative agency in Sarnia Ontario."}
        />

        <section class="project-banner">
          <div class="vertical-middle">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6 project-title">
                  <h4>Project Subtitle Here</h4>
                  <h1>Project #01 </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="container d-none d-sm-block">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="project-img">
                  <img src={ProjectImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="project-img d-block d-sm-none">
            <img src={ProjectImg} alt="" />
          </div>
        </section>
        {/* <!-- project banner end -->
        <!-- project info start --> */}
        <section class="projects-info">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 project-info-left">
                <p>
                  Mustache edison bulb cornhole seitan actually letterpress 3
                  wolf moon. Gluten-free XOXO umami austin gochujang tumeric
                  tumblr. Tilde glossier gentrify synth. Salvia kale chips pug,
                  bushwick try-hard aesthetic paleo gluten-free cray pabst
                  schlitz actually vice franzen affogato. Church-key keffiyeh
                  cray marfa skateboard williamsburg, vice meditation shabby
                  chic.
                </p>
              </div>
              <div class="col-lg-6 col-md-6 project-info-right">
                <ul>
                  <li>Service Title 01</li>
                  <li>Service Title 02</li>
                  <li>Service Title 03</li>
                  <li class="project-date">January 2019</li>
                  <li class="project-link">
                    <a href="#" title="thisisawebsitelink.ca">
                      thisisawebsitelink.ca
                    </a>
                  </li>
                </ul>
                <div class="project-services">Services</div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- project info end -->
        <!-- project img block1 start --> */}
        <section class="project-img-block1 full-img-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-5 prj-img-block-left1">
                <img src={DummyImg1} alt="" />
              </div>
              <div class="col-lg-7 col-md-7 prj-img-block-rght">
                <img src={DummyImg2} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- project img block1 end -->
        <!-- project info2 start --> */}
        <section class="project-info-btm">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <p>
                  Chartreuse tumblr occupy roof party paleo la croix vice hella.
                  You probably haven't heard of them authentic coloring book.
                  Roof party paleo la croix vice hella artisan raw denim.{" "}
                </p>
              </div>
              <div class="col-lg-6 col-md-6">
                <p>
                  Roof party paleo la croix vice hella artisan raw denim. You
                  probably haven't heard of them authentic coloring book. Roof
                  party paleo la croix vice hella artisan raw denim haven't
                  heard of them authentic{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- project info2 end -->
        <!-- project img block1 start --> */}
        <section
          class="project-img-full-top d-none d-sm-block"
          style={{ backgroundImage: "url(" + DummyImg3 + ")" }}
        ></section>
        {/* <!-- project img block1 end -->
        <!-- project half img block start --> */}
        <section class="project-img-half-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 prj-img-half-block-left">
                <img src={DummyImg4} alt="" />
              </div>
              <div class="col-lg-6 col-md-6 prj-img-half-block-rght">
                <div class="half-block-right">
                  <img src={DummyImg5} alt="" />
                </div>
                <div class="half-block-right">
                  <img src={DummyImg5} alt="" />
                </div>
                <div class="half-block-right">
                  <img src={DummyImg5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- project half img block end -->
        <!-- project img block1 start --> */}
        <section class="project-img-block1 full-img-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-5 prj-img-block-left1">
                <img src={DummyImg1} alt="" />
              </div>
              <div class="col-lg-7 col-md-7 prj-img-block-rght">
                <img src={DummyImg2} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- project img block1 end -->
        <!-- project img block2 start --> */}
        <section
          class="project-img-full-bottom"
          style={{ backgroundImage: "url(" + DummyImg6 + ")" }}
        ></section>
        {/* <!-- project img block2 end -->
        <!-- project upnext start --> */}
        <section class="project-upnext">
          <h3>up next: del duca</h3>
        </section>
        {/* <!-- project upnext end -->
        <!-- project title bottom start --> */}
        <section class="project-title-btm">
          <div class="">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6 project-title">
                  <h4>Let’s talk politics.</h4>
                  <h2>Title Here</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ProjectPage
