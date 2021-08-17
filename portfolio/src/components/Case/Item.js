import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import "./Case.css"
import Neclogo from '../../images/Nec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Content() {
    return (
      <motion.div
        className="content-div"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <h1>Project Life Cycle</h1>
          <ul className="ul-nec"> {
            
          }
            <li className="li-nec">Use of Lidar Sensors to detect and track Humans</li>
            <li className="li-nec">Created Virtual Network Database using Azure Cloud</li>
            <li className="li-nec">Use of Angular for the Frontend Framework</li>
            <li className="li-nec">Contributed in coding out the backend development using Python</li>
          </ul>

          </div>
      </motion.div>
    );
  }

function Item() {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li className="li-case" layout onClick={toggleOpen} >
        <motion.div className="Nec-top"  layout>
          <img className="img-nec"src={Neclogo} />
          {/* <FontAwesomeIcon className="Sort" size="2x" icon={isOpen ? 'angle-double-down' : 'angle-double-up'} /> */}

        </motion.div>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }
export default Item

