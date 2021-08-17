import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Case.css";
import neclogo from "../../images/Nec.png";
import quanergyui from "../../images/quanergy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";

const Case = () => {
  return (
    <div className="container">
      <div className="container-inner" id="Case">
        <div className="empty-row">
          <div className="line" />
        </div>
        <div className="content-row">
          <div className="content-internship" id="trigger1">
            <div className="Internship-left-row" >
              <Controller>
              <div className="EmptySpace">
                <Scene classToggle="typewriter" triggerElement="#trigger1">
                  <div >
                    <h1 className="Internship-Title" >
                      Internships
                    </h1>
                  </div>
                </Scene>
                </div>
                
              </Controller>
              <h3>01. NEC ( Project Life Cycle ) </h3>
              <div className="Box">
                <p>Use of Lidar Sensors to detect and track Humans</p>
                <p>Created Virtual Network Database using Azure Cloud</p>
                <p>Use of Angular for the Frontend Framework</p>
                <p>
                  Contributed in coding out the backend development using Python
                </p>
              </div>
              <div className="btm-span">
                <span>
                  Check out their website!
                  <Link
                    to={{ pathname: "https://sg.nec.com/" }}
                    target="_blank"
                  >
                    <img className="neclogo" src={neclogo} />
                  </Link>
                </span>
              </div>
            </div>
            <div className="Internship-right-row">
              <div>
                <img className="img-Internship" src={quanergyui}></img>
                <span>
                  <ul className="ul-img-inner">
                    <li>
                      <FontAwesomeIcon
                        size="2x"
                        icon={["fab", "docker"]}
                      ></FontAwesomeIcon>
                      <p>Docker</p>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        size="2x"
                        icon={["fab", "angular"]}
                      ></FontAwesomeIcon>
                      <p>Angular</p>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        size="2x"
                        icon={["fab", "ubuntu"]}
                      ></FontAwesomeIcon>
                      <p>Ubuntu</p>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        size="2x"
                        icon={["fab", "microsoft"]}
                      ></FontAwesomeIcon>
                      <p>Azure</p>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
