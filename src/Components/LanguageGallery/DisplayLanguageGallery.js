import React from "react";
import "./LanguageGallery.css";
// import { Link } from "react-router";

export default function DisplayLanguageGallery(props) {
  return (
    // <Link to={`/${props.id}`} className="lang">
    <>
      <div className="item">
        <img
          src={props.image}
          alt={props.name}
          className="flag"
          id={props.name}
        />
      </div>
      <div className="overlay">
        <h2 className="showName">{props.name}</h2>
      </div>
    </>
  );
}
