import React from "react";
import "../style/home.css";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
// import Modal from "../components/utils/Modal";
import Subscribe from "../components/ui/Subscribe";

function App() {
  return (
    <>
      <div className='home'>
        <div className='title'>
          <h2>A Simple Application For Your Investment Options</h2>
        </div>
        <header className='App-body'>
          <div className='home-card'>
            <div className='info-card'>
              <p>
                We supply a series of A.I. principles and practical patterns
                connected with high quality algebric algorithmically resources
                to help users manage their investments more efficiently
              </p>
            </div>

            {/* <Modal /> */}
            <FingerprintIcon
              className='App-btn pulse-btn'
              type='button'
              onClick={(event) => (window.location.href = "/login")}
            />
            <ArrowUpwardTwoToneIcon className='bounce' />
            <h5>Login</h5>
            <h6>BETA stage for developers ONLY</h6>
          </div>
          <Subscribe />
        </header>
      </div>
    </>
  );
}

export default App;
