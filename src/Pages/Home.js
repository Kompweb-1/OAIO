// import { useEffect, useState } from "react";
import React from "react";
import "../style/Home.css";
import fingerprint from "../assets/fingerprint-login.png";
// import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
// import Modal from "../components/utils/Modal";
import Subscribe from "../Components/UI/subscribe";

function App() {
  // const [file, setFile] = useState("");
  // useEffect(() => {}, [file]);

  return (
    <>
      <div className='home'>
        <div className='title'>
          <h2>A Simple Application For Your Investment Options</h2>
        </div>
        <header className='App-body'>
          <div className='home-card'>
            <div className='card pulse'>
              <p>
                We supply a series of A.I. principles and practical patterns
                connected with high quality algebric algorithmically resources
                to help users manage their investments more efficiently
              </p>
            </div>

            {/* <Modal /> */}
            <div className='App-btn'>
              <img
                src={fingerprint}
                alt=''
                type='button'
                onClick={(event) => (window.location.href = "/login")}
              />
            </div>
            <h5>Login</h5>

            {/* <FingerprintIcon
              className='App-btn pulse'
              type='button'
              onClick={(event) => (window.location.href = "/login")}
            /> */}
            {/* <ArrowUpwardTwoToneIcon className='bounce' /> */}

            <h6>BETA stage for developers ONLY</h6>
          </div>
          <Subscribe />
        </header>
      </div>
    </>
  );
}

export default App;
