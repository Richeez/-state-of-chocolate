import React from "react";
import { Container } from "../../styled";
import { Button } from "../../styledButtons";
import { StyledHome } from "./styledHome";

const Home = () => {
  return (
    <Container>
      <StyledHome>
        <div className="main-header">
          <p>welcome to</p>
          <h1>your state of chocolate</h1>
          <Button>buy now</Button>
        </div>
      </StyledHome>
    </Container>
  );
};

export default Home;
