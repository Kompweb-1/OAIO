import React from "react";
import "../../style/App.css";

function Logo() {
  return (
    <div className='logo'>
      <h1>
        {/* <em>I</em> */}
        <em className='planet left'>O</em>
        <em>A</em>
        <em>I</em>
        <em className='planet right'>O</em>
        {/* <em>I</em> */}
      </h1>
    </div>
  );
}

export default Logo;
