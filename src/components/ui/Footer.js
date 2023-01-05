import React from "react";
import "../../style/Footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
// import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <footer>
      <div className='social-icons'>
        <TelegramIcon />
        {/* <TwitterIcon /> */}
      </div>
      {/* <p>2023</p> */}
    </footer>
  );
}

export default Footer;
