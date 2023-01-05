import React from "react";
import "../style/App.css";
import "../style/Modal.css";

import FingerprintIcon from "@mui/icons-material/Fingerprint";

import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
// import Modal from "../components/utils/Modal";
// import LogIn from "./LogIn";
import Logo from "../components/ui/Logo";
import Subscribe from "../components/ui/Subscribe";
// import { useNavigate } from "react-router-dom";

function App() {
  // const routeChange = () => {
  // let path = "/dashboard";
  // navigate = path;
  // };

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <div className='Container'>
            <Logo />
            <h2>A Simple Application For Your Investment Options</h2>
            <p className='home-card'>
              We supply a series of A.I. principles and practical patterns
              connected with high quality algebric algorithmically resources to
              help users manage their investments more efficiently.
            </p>
            {/* <Modal /> */}
            <FingerprintIcon
              className='App-btn pulse-btn'
              type='button'
              onClick={(event) => (window.location.href = "/login")}

              // onClick={routeChange}
            />
            <br />
            {/* <LogIn /> */}
            <ArrowUpwardTwoToneIcon className='bounce' />
            <h5>Login</h5>
            <h6>BETA stage for developers ONLY</h6>
            <Subscribe />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
