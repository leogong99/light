import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';

import Search from "./Search"

const Index = () => {
  return (
    <div className="container">
      <h1>Hello from light!</h1>
      <Search></Search>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
