import React from "react";
import "./Homepage.css";
import LanguageGallery from "../LanguageGallery/LanguageGallery.js";
import DisplayLanguageGallery from "../LanguageGallery/DisplayLanguageGallery.js";

export default function Homepage() {
  return (
    <div className="homepage">
      <h2 className="homepage-title">Welcome to Pocket Lingo</h2>
      <h3 className="lang-select">Select a language</h3>
      <div className="lang-container">
        {LanguageGallery().map((lang) => (
          <DisplayLanguageGallery
            key={lang.id}
            id={lang.id}
            name={lang.name}
            image={require(`../../Images/${lang.logoTitle}-flag.svg`)}
          />
        ))}
      </div>
    </div>
  );
}
