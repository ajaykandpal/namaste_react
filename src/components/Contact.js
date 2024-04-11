import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      {/* <h2>Phone No: 7467802509</h2>
      <h2>Email: ajay@gmail.com</h2> */}
      <form>
        <input
          className='border border-black p-2 m-2'
          type='text'
          placeholder='name'
        ></input>
        <input
          className='border border-black p-2 m-2'
          type='text'
          placeholder='message'
        ></input>
        <button className='border border-black bg-gray-100 rounded-xl p-2 m-2'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
