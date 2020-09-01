import React, { useState, useEffect } from "react";
import "./German.css";

export default function German() {
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = "/rest/questions";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
        setLoaded(true);
      });
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  } else {
    questions.map((question) => {
      return (
        <div key={question._id}>
          <p>
            Question: {question.q} - Difficulty: {question.difficulty}
          </p>
          <hr />
        </div>
      );
    });
  }
}

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
