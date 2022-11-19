import React from "react";
import Menu from "./menu/Menu";
import { Header, LinkCont, NavLink, Nav, Brand, BrandLogo } from "./styledNav";

const NavBar = () => {
  return (
    <Header>
      <Menu />
      <Nav>
        <Brand>
          <BrandLogo src="images/logo1.png" alt="" />
        </Brand>
        <LinkCont>
          <NavLink>home</NavLink>
          <NavLink>feature</NavLink>
          <NavLink>services</NavLink>
          <NavLink>testimonials</NavLink>
          <NavLink>meet us</NavLink>
        </LinkCont>
      </Nav>
    </Header>
  );
};

export default NavBar;
