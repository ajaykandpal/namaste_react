import React from "react";
import ReactDOM from "react-dom/client";

//React Elements
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const jsxHeading = <h1 id='heading'>Namaste React</h1>;

const Title = () => {
  return <h1>Title here</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <h1>Hi from Ajay</h1>
      <Title></Title>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
