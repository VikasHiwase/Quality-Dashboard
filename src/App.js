import React from "react";
import logo from "./logo.svg";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "roboto",
      }}
    >
      <img src={logo} alt="Quality logo" />
      <h1
        style={{
          color: "#6ec177",
          margin: 0,
        }}
      >
        Hello World
      </h1>
      <p>What's up, comming soon</p>
    </div>
  );
};

export default App;
