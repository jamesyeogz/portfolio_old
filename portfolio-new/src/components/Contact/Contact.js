import React from "react";
import "./Contact.css";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, SplitLetters } from 'react-gsap';
import Card from "../Card/Card";

const Contact = () => {
  return (
    <div className="container">
      <div className="container-inner">
        <div className="empty-row">
          <div className="line" />
        </div>
        <div className="content-row">
          <div className="Contact-Content">
            <div className="Contact-Content-Left" id="trigger2">
                <Controller>
                <div className="EmptySpace">
                  <Scene classToggle="typewriter" trigger="#trigger2">
                    <div >
                    <h1 className="Contact-Title">Interested In Collaborating/Hiring?</h1>
              </div>
              </Scene>
              </div>
              <p>
                Contact me at the email address below or drop me a text on
                Linkedin!
              </p>
              <p>
                I warmly welcome Internships too!
              </p>
              </Controller>
              </div>
              <div className="Contact-Content-Right"><Card /></div>
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
