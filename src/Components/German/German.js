import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import germanFlag from "../../Images/German-flag.svg";
import "./German.css";

export default function German() {
  const [questions, setQuestions] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = "/rest/questions/";
    // const proxyurl = "https://warm-lowlands-71223.herokuapp.com/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  // if (!loaded) {
  //   return <div>Loading...</div>;
  // } else {

  return (
    <div className="question-grid">
      {/* <img src={germanFlag} alt="german-flag" className="german-flag" /> */}
      {questions.map((question) => {
        return (
          <div key={question._id}>
            <p className="card">{question.q}</p>
          </div>
        );
      })}
    </div>
  );
}
//HEADERS
// useEffect(() => {
//   fetch("/rest/questions", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })

//State version - test
// export default class German extends React.Component {
//   constructor() {
//     super();
//     this.state = { questions: [] };
//   }

//   componentDidMount() {
//     fetch("/rest/questions")
//       .then((response) => response.json())
//       .then((questions) => this.setState({ questions }));
//   }

//   render() {
//     return (
//       <div className="gallery">
//         {this.state.questions.length ? (
//           this.state.questions.map((question) => {
//             return <p key={question.q}>Question: {question.q}</p>;
//           })
//         ) : (
//           <p>Page loading</p>
//         )}
//       </div>
//     );
//   }
// }
