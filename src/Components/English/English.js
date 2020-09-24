import React, { useState, useEffect } from "react";
import "./English.css";

export default function English() {
  const [word, setWord] = useState([]);
  useEffect(() => {
    // const proxyurl = "https://warm-lowlands-71223.herokuapp.com/";
    const url = "/rest/english/WordOfDay";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setWord(data))
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="question-grid">
      {word.map((word) => {
        return (
          <div key={word._id}>
            <p className="card">{word.word}</p>
          </div>
        );
      })}
    </div>
  );
}
