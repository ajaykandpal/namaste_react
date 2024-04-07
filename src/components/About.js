import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor() {
    super();
    console.log("P1C");
  }
  componentDidMount() {
    console.log("P1M");
  }
  render() {
    return (
      <div>
        {console.log("P1R")}
        <h1>About</h1>
        <h2>Namaste from Ajay</h2>
        <User name='Ajay from Function' />
        <UserClass name={"Ajay from Class"} />
        <UserClass name={"Elon from Class"} />
      </div>
    );
  }
}

// function About() {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Namaste from Ajay</h2>
//       <User name='Ajay from Function' />
//       <UserClass name={"Ajay from Class"} />
//       <UserClass name={"Elon from Class"} />
//     </div>
//   );
// }

export default About;
