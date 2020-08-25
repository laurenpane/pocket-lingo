import React, { useState } from "react";
import "./Homepage.css";
import DisplayLanguageGallery from "../LanguageGallery/DisplayLanguageGallery.js";

// export default function Homepage() {
//   return (
//     <div className="homepage">
//       <h2 className="homepage-title">Welcome to Pocket Lingo</h2>
//       <div className="homepage-select">
//         <h3 className="homepage-select-title">Select a language</h3>
//         <div className="flag-grid">
//           <img src={germanFlag} alt="german-flag" className="german-flag" />
//           <img src={ukFlag} alt="uk-flag" className="uk-flag" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Homepage() {
  const [langs, setLangs] = useState([]);
  fetch("/langs", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setLangs(data));

  return (
    <div className="homepage">
      <h2 className="homepage-title">Welcome to Pocket Lingo</h2>
      <div className="lang-container">
        {langs.map((lang) => (
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
