import React, { useState, useEffect } from "react";
import "./German.css";

export default function German() {
  const [questions, setQuestions] = useState([]);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);

  useEffect(() => {
    fetch("/rest/questions", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setQuestionsLoaded(true);
      });
  }, []);

  if (!questionsLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {Array.from(questions).map((question) => (
          <div key={question._id}>
            <p>
              Question: {question.q} - Difficulty: {question.difficulty}
            </p>
            <hr />
          </div>
        ))}
      </>
    );
  }
}
