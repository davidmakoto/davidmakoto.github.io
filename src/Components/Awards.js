import React, { Component } from "react";

import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>
              <h2><a href={projects.url}>{projects.title}</a></h2>
              <div className="languages">
                <p className="project-languages">{projects.languages} </p>
              </div>
              <div className="years">
                <p>{projects.years} </p>
              </div>
              <b className="project-description">
                {projects.description}
              </b>
            </div>
            <ul className="social">
              <a href={projects.url} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
          </div>
        </div>
      );
    });

    return (
    <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projects</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;