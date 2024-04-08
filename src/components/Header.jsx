import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");

  const onlineStatus = useOnlineStatus();

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/groceries'>Groceries</Link>
          </li>
          <li>
            <Link to='about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <button
            className='login'
            onClick={() => {
              btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
