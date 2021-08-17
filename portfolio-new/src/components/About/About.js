import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="container-inner" id="Skillset">
        <div className="empty-row">
          <div className="line" />
        </div>
        <div className="content-row" id="trigger">
          <Controller>
            <div className="Left-column">
                <div className="EmptySpace">
              <Scene classToggle="typewriter" triggerElement="#trigger">
                <div>
                  <h1 className="Skills">Skills and Experiences</h1>
                </div>
              </Scene>
              </div>
              <div className="Skill-Words">
              <p>
                I am mostly experienced in using Python, HTML, CSS, Javascript
                and Reactjs
              </p>
              <p>
                However, I have many exposures to different kind of languages
                and still learning
              </p>
              </div>
            </div>
          </Controller>
        </div>
      </div>
    </div>
  );
};

export default About;
