import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");

  const onlineStatus = useOnlineStatus();

  return (
    <div className='header flex justify-between items-center bg-pink-100 shadow-lg mb-2'>
      <div className='logo-container'>
        <img className=' logo w-20 ' src={logo} alt='logo' />
      </div>
      <div className='nav-items flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-2'>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/groceries'>Groceries</Link>
          </li>
          <li className='px-2'>
            <Link to='about'>About Us</Link>
          </li>
          <li className='px-2'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-2'>
            <Link to='/cart'>Cart</Link>
          </li>
          <button
            className='login px-2'
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
