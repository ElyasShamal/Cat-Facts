import React, { useState, useEffect } from "react";
import Axios from "axios";

function Main() {
  const [getCate, setCate] = useState("");

  const fetchData = () => {
    Axios.get("https://catfact.ninja/fact").then((resp) => {
      setCate(resp.data.fact);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Cat Facts</h1>
      <div>
        <p>{getCate}</p>
        <button onClick={fetchData}>Click me </button>
      </div>
    </div>
  );
}

export default Main;
