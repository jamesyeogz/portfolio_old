import React from "react";
import "./Intro.css";
import ProfilePic from "../../images/profile-example.jpeg";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.6, 0.01, 0.23, 0.9] };
// const transitionimage = {duration: 10, ease:[ 0.6, 0.01, -0.05,0.9]};

const transitionwords = {
  initial: {
    x: 0,
  },
  animate: {
    delay: 5,
    x: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const letter = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, transition },
  },
};

const Intro = () => {
  return (
    <motion.div
      className="container"
      id="Home"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container-inner">
        <div className="empty-row">
          <motion.div
            initial={{ y: "-120%" }}
            animate={{
              y: 0,
              transition: {
                delay: 0.5,
                duration: 1.4,
                ease: [0.6, 0.01, 0.23, 0.09],
              },
            }}
            className="line"
          />
        </div>
        <div className="content-row">
          <motion.div variants={transitionwords} className="Introduction-p">
            <motion.h1 variants={letter}>James Yeo</motion.h1>
            <motion.h3 variants={letter}>Software/Frontend Developer</motion.h3>
            <motion.p variants={letter}>
              A Penultimate Student Studying Electrical and Electronics
              Engineering in Nanyang Technological University
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ x: "-52%" }}
            animate={{
              x: 0,
              transition: {
                delay: 0.2,
                duration: 1.4,
                ease: [0.6, 0.01, 0.23, 0.09],
              },
            }}
          >
            <img className="Intro-profile " src={ProfilePic} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
