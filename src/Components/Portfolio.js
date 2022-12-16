import React, { Component } from "react";
// import Card from "./Components/Card/Card.babel"; // ./Components/Card";

import Zmage from "react-zmage";
import Fade from "react-reveal";



// class Button extends React.Component {
//   btnClick() {
//     window.open("https://www.google.com");
//   }
// render() {
//     return (<div>
//             <ButtonComponent cssClass='e-link' onClick={this.btnClick.bind(this)}>Go to google</ButtonComponent>
//         </div>);
//   }
// }
// ReactDOM.render(<App />, document.getElementById('button'));

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
                <p>{projects.languages} </p> 
              </div>
              <div className="years">
                <p>{projects.years} </p> 
              </div>
              <b>
                {projects.description} 
              </b> 
            </div>
            <ul className="social">
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a> */}
              <a href={projects.url} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            {/* <div style={{ textAlign: "center" }}>{projects.url}</div> */}

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