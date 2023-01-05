import React from "react";
import "../../style/Navbar.css";
import TemporaryDrawer from "../../components/utils/Drawer";

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <TemporaryDrawer />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
