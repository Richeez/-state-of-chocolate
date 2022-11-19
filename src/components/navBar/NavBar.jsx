import React from "react";
import Menu from "./menu/Menu";
import {
  Header,
  LinkCont,
  NavLink,
  Nav,
  Brand,
  BrandLogo,
  Link,
} from "./styledNav";

const NavBar = ({
  menuBar,
  toggleMenu,
  menu,
  scrollToPage,
  home,
  services,
  header,
  isInView,
}) => {
  return (
    <Header>
      <Menu toggleMenu={toggleMenu} menuBar={menuBar} />
      <Nav className={isInView ? "" : "header"} ref={header}>
        <Brand>
          <BrandLogo src="images/logo1.png" alt="" />
        </Brand>
        <LinkCont ref={menu}>
          <NavLink>
            <Link onClick={() => scrollToPage(home)}>home</Link>
          </NavLink>
          {/* <NavLink>feature</NavLink> */}
          <NavLink>
            <Link onClick={() => scrollToPage(services)}>services</Link>
          </NavLink>
          {/* <NavLink>testimonials</NavLink> */}
          {/* <NavLink>meet us</NavLink> */}
        </LinkCont>
      </Nav>
    </Header>
  );
};

export default NavBar;
