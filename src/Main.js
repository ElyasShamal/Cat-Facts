import React from "react";
import { useState } from "react";

function Main() {
  const [getData, setData] = useState("");

  const fetchData = () => {
    fetch();
  };

  return (
    <div>
      <h1>Jokes</h1>
      <p></p>
      <button></button>
    </div>
  );
}

export default Main;
