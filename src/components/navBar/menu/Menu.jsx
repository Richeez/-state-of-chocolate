import React from "react";
import { StyledMenu } from "./styledMenu";

const Menu = ({ menuBar, toggleMenu }) => {
  return (
    <StyledMenu onClick={toggleMenu}>
      <div ref={menuBar} className="bugger">
        <div className="center"></div>
      </div>
    </StyledMenu>
  );
};

export default Menu;
