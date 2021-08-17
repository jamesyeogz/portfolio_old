import React from "react";
import "./Case.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Item from "./Item";
import "../Skills/Skills.css";
import { Scene, Controller } from "react-scrollmagic";
import Item1 from "./Item1";

const Case = () => {
  return (
    <Controller indicators={true}>
      <div id="Case" className="container-case">
        <div className="container-inner-case">
          <div className="top-row-Case">
            <div className="top-top-row" id="trigger1">
              <Scene classToggle="typewriter1" triggerElement="#trigger1">
                <div style={{ width: "auto" }}>
                  <h1 className="Internship">Internships</h1>
                </div>
              </Scene>
            </div>
            <div className="top-bottom-row">
              <AnimateSharedLayout>
                <motion.ul className="ul-motion" layout>
                  <Item />
                </motion.ul>
              </AnimateSharedLayout>
            </div>
          </div>
          <div className="space"></div>
          <div className="bottom-row-case" id="trigger2">
            <div className="animation-box">
              <Scene
                classToggle="typewriter1"
                triggerElement="#trigger2"
                indicators={true}
              >
                <div style={{ width: "300px" }}>
                  <h1 className="Case-Studies">Case Studies</h1>
                </div>
              </Scene>
            </div>
            <div className="bottom-bottom-row">
              <AnimateSharedLayout>
                <motion.ul className="ul-motion" layout>
                  <Item1 />
                </motion.ul>
              </AnimateSharedLayout>
            </div>
          </div>
        </div>
      </div>
    </Controller>
  );
};

export default Case;
