import React, { Link } from "react";
// import { Link } from "react-router";

export default function DisplayLanguageGallery(props) {
  return (
    <Link to={`/${props.id}`} className="lang">
      <img
        src={props.image}
        alt={props.name}
        className={`${props.name}-flag`}
        id={props.name}
      />
      <div className="overlay">
        <h2 className="showName">{props.name}</h2>
      </div>
    </Link>
  );
}
