import React from "react";
import "./Homepage.css";
import germanFlag from "../../Images/German-flag.svg";
import ukFlag from "../../Images/UK-flag.svg";

export default function Homepage() {
  return (
    <div className="homepage">
      <h2 className="homepage-title">Welcome to Pocket Lingo</h2>
      <div className="homepage-select">
        <h3 className="homepage-select-title">Select a language</h3>
        <div className="flag-grid">
          <img src={germanFlag} alt="german-flag" className="german-flag" />
          <img src={ukFlag} alt="uk-flag" className="uk-flag" />
        </div>
      </div>
    </div>
  );
}
