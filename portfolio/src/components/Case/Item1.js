import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import "./Case.css"
import imageSample from '../../images/Portfolio-ss.png'

function Content1() {
    return (
      <motion.div
        className="content-div"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="small-box">
        
        <div>
          <h1 className="number-font">No.01</h1>
          <h1>Portfolio/Website</h1>
          <ul className="ul-nec"> {
            
          }
            <li className="li-nec">Use of React-MagicScroll and FramerMotion</li>
            <li className="li-nec">Use of Router and React-Scroll to Direct the user</li>
            <li className="li-nec">Basic of Reactjs to create the Outline with CSS</li>
          </ul>
  
          </div>
          <div className="Image-sample">
              <img className="ImageSample"src={imageSample}/>
          </div>
          </div>
      </motion.div>
    );
  }
  function Item1() {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li className="li-case" layout onClick={toggleOpen} >
        <motion.div className="Nec-top"  layout>
          <h1 className="Logger-h1">Loggers!</h1>
          {/* <FontAwesomeIcon className="Sort" size="2x" icon={isOpen ? 'angle-double-down' : 'angle-double-up'} /> */}
  
        </motion.div>
        <AnimatePresence>{isOpen && <Content1 />}</AnimatePresence>
      </motion.li>
    );
  }
  export default Item1
  