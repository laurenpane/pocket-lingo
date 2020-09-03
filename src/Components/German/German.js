import React from "react";
// import { Link } from "react-router-dom";
import germanFlag from "../../Images/German-flag.svg";
import "./German.css";
import GetGermanQs from "./GetGermanQs.js";

export default function German() {
  return (
    <div className="german-home">
      <img src={germanFlag} alt="german-flag" className="german-flag" />
      <GetGermanQs />
    </div>
  );
}
