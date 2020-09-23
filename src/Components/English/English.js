import React, { useState, useEffect } from "react";
import "./English.css";

export default function English() {
  const [word, setWord] = useState(undefined);
  const API_FULL_URL = `${process.env.API_URL}${process.env.API_KEY}`;
  useEffect(() => {
    async function getRandomMeal() {
      const response = await fetch(API_FULL_URL);
      const data = await response.json();
      setWord(data);
      console.log(word);
    }
    getRandomMeal();
  }, []);
  return <div className="english">English</div>;
}
