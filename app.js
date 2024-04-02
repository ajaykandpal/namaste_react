import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "heading" }, "Hi Nested Element"),
    React.createElement("h1", { id: "heading" }, "Hi Nested Element 2"),
  ])
);
// console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "xyz" },
//   "Hello World from React"
// );

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
