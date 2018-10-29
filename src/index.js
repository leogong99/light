import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search"

const Index = () => {
  return <div>Hello from light!<Search></Search></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
