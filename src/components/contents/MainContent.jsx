import React from "react";
import { About, Home, Testimonial, Services } from "..";

const MainContent = ({ services, home }) => {
  return (
    <main>
      <Home home={home} />
      <Services services={services} />
      {/* <About />
      <Testimonial /> */}
    </main>
  );
};

export default MainContent;
