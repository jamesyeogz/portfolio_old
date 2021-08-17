import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Media-Popout.css";

const Card = () => {
  const [Flipped, setFlipped] = useState(false);
  const handleFlipped = () => setFlipped(!Flipped);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <div className="Card-Wrapper">
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <ReactCardFlip isFlipped={Flipped} flipDirection="horizontal">
          <div className="Card-Container">
            <div className="Card-Content-Front">
              <h3 className="h3-Card">Click To Flip for My Virtual NameCard</h3>
              <button className="button1" onClick={handleFlipped}>
                Click to Flip Me!
              </button>
            </div>
          </div>

          <div className="Card-Container">
            <div className="Card-Content-Front">
              <div className="Card-Back">
                <div className="Card-Back-Left">
                  <FontAwesomeIcon
                    className="logo-Card"
                    size="5x"
                    icon={"copyright"}
                  />
                  <h1>James Yeo</h1>
                  <p /*style={{ "margin-top": "-20px" }}*/>Software Developer</p>
                </div>
                <div className="Card-Back-Right">
                  <div className=
                  "Content-Back-Right">
                    <h3 style={{ "padding-top": "20px" }}>
                      Email: jyeogz@gmail.com
                    </h3>
                    <p>Address: McNair Road Block 119</p>
                    <p>Singapore 320119</p>
                    
                  </div>
                  <div class="wrapper">
                    <div class="icon linkedin">
                      <div class="tooltip">Linkedin</div>
                      <span>
                        <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
                      </span>
                    </div>
                    <div class="icon instagram">
                      <div class="tooltip">Instagram</div>
                      <span>
                        <FontAwesomeIcon
                          size="2x"
                          icon={["fab", "instagram"]}
                        />
                      </span>
                    </div>
                    <div class="icon github">
                      <div class="tooltip">Github</div>
                      <span>
                        <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button2" onClick={handleFlipped}>
                Click to Flip Me!
              </button>
            </div>
          </div>
        </ReactCardFlip>
      </motion.div>
    </div>
  );
};

export default Card;
