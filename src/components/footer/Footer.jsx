import React from "react";
import { StyledFooter } from "./styledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <small className="contact-us">
        <a href="mailto:info@yourstateofchocolate.com" target="_blank">
          contact us - <span>yourstateofchocolate</span>
        </a>
      </small>
      <small>&copy; 2022 your state of chocolate | all rights reserved </small>
    </StyledFooter>
  );
};

export default Footer;
