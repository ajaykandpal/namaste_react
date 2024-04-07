import React from "react";

class SubClass extends React.Component {
  constructor() {
    super();
    console.log("C2C");
  }
  componentDidMount() {
    console.log("C2M");
  }
  render() {
    <div>
      {console.log("C2R")}
      Hi
    </div>;
  }
}

export default SubClass;
