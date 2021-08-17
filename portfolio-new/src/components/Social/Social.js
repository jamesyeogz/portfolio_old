import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";

const Social = () => {
  return (
    <div className="icon-container">
      <div className="icon-bar">
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/james-yeo-7237571b2/",
          }}
          target="_blank"
        >
          <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
        </Link>
        <Link
          style={{ "margin-top": "10px" }}
          to={{ pathname: "https://github.com/jamesyeo-python" }}
          target="_blank"
        >
          <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
        </Link>
        <Link
          style={{ "margin-top": "10px" }}
          to={{ pathname: "https://www.instagram.com/nubjames/" }}
          target="_blank"
        >
          <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
