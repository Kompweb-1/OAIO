// import { useEffect, useState } from "react";
import React from "react";
import "../style/home.css";
import fingerprint from "../assets/fingerprint-login.png";
// import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
// import Modal from "../components/utils/Modal";
import Subscribe from "../components/ui/Subscribe";

function App() {
  // const [file, setFile] = useState("");
  // useEffect(() => {}, [file]);

  return (
    <>
      <div className='home'>
        <div className='title '>
          <h1>
            A Simple <br />
            Application For
            <br /> Your Investment <br />
            Options
          </h1>
          <p className='p-content pulse'>
            We supply a series of A.I. principles and practical patterns
            connected with high quality algebric algorithmically resources to
            help users manage their investments more efficiently
          </p>
          <h2>BETA stage for developers ONLY</h2>
        </div>

        <header className='App-body'>
          <div className='home-card'>
            <div className='card'>
              <div className='App-btn pulse-print'>
                <img
                  src={fingerprint}
                  alt=''
                  type='button'
                  onClick={(event) => (window.location.href = "/login")}
                />
              </div>
            </div>
            <h5>Login</h5>

            {/* <Modal /> */}

            {/* <FingerprintIcon
              className='App-btn pulse'
              type='button'
              onClick={(event) => (window.location.href = "/login")}
            /> */}
            {/* <ArrowUpwardTwoToneIcon className='bounce' /> */}
          </div>
          <Subscribe />
        </header>
      </div>
    </>
  );
}

export default App;
