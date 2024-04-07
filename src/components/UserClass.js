import React from "react";
import SubClass from "./SubClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "C1C");
  }
  componentDidMount() {
    console.log(this.props.name + "C1M");
  }

  render() {
    return (
      <div className='user-card'>
        {console.log(this.props.name + "C1R")}
        <h3>Name: {this.props.name}</h3>
        <SubClass />
        <h3>Location: Haldwani</h3>
      </div>
    );
  }
}

export default UserClass;
