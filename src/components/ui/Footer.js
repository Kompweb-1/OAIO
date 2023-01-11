import React from "react";
import "../../style/footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <footer>
      <div className='myfooter'>
        <a href='/'>
          <h4>Home</h4>
        </a>
        <a href='/contact'>
          <h4>Contact</h4>
        </a>
        <a href='/login'>
          <h4>Login</h4>
        </a>
        {/* <a href='/signup'>
          <h4>Signup</h4>
        </a> */}
        <TelegramIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
}

export default Footer;
