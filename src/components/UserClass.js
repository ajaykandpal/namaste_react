import React from "react";
import SubClass from "./SubClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "C1C");
    this.state = {
      userInfo: {
        name: "Default Name",
        location: "USA",
        avatar_url: "dummy",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "C1M");
    const data = await fetch("https://api.github.com/users/ajaykandpal");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className='user-card'>
        {/* {console.log(this.props.name + "C1R")} */}
        <img src={avatar_url}></img>
        <h3>Name: {name}</h3>
        {/* <SubClass /> */}
        <h3>Location: {location ?? "Canada"}</h3>
      </div>
    );
  }
}

export default UserClass;
