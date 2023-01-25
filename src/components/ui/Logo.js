import React from "react";
import "../../style/Logo.css";

function Logo() {
  return (
    <div className='logo'>
      <a href='/'>
        <h1>
          {/* <em>I</em> */}
          <em className='planet left'>O</em>
          <em>A</em>
          <em>I</em>
          <em className='planet right'>O</em>
          {/* <em>I</em> */}
        </h1>
      </a>
    </div>
  );
}

export default Logo;
