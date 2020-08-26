import React from "react";
import { Link } from "react-router-dom";
import "./LanguageGallery.css";

export default function DisplayLanguageGallery(props) {
  return (
    <Link to={`/${props.id}`} className="lang">
      <img
        src={props.image}
        alt={props.name}
        className="flag"
        id={props.name}
      />
      <div className="overlay">
        <h2 className="text">{props.name}</h2>
      </div>
    </Link>
  );
}

// export default function Series(props) {
//   return (
//     <Link to={`/${props.id}`} className="item">
//       <img src={props.logo} alt={props.name} id="showLogo" />
//       <div className="overlay">
//         <div className="text">
//           <h2 id="showName">{props.name}</h2>
//           <p className="description">{props.description}</p>
//           <p className="click">{props.click}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }
