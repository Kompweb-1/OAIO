import React from "react";
import "../../style/Footer.css";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <footer>
      <div className='myfooter'>
        <div className='footer-menu'>
          <a href='/'>
            <h4>Home</h4>
          </a>
          <a href='/contact'>
            <h4>Contact</h4>
          </a>
          <a href='/login'>
            <h4>Login</h4>
          </a>
        </div>

        <div className='social-box'>
          {/* <TelegramIcon /> <TwitterIcon /> */}
          <h6>© {new Date().getFullYear()} OAIO, Inc. All Rights Reserved</h6>
        </div>
        {/* <a href='/signup'>
          <h4>Signup</h4>
        </a> */}
      </div>
    </footer>
  );
}

export default Footer;
