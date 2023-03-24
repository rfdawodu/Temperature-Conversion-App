import React from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Header from "./components/Header";

<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
></link>;

function App() {
  return (
    <div className="App">
      <h1>Temperature converter App</h1>
      <div className="materials"></div>
      <Header />
      <Inputs />
    </div>
  );
}

export default App;
