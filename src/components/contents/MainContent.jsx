import React from "react";
import { About, Home, Testimonial, Services, Contact } from "..";

const MainContent = ({ services, home, contact }) => {
  return (
    <main>
      <Home home={home} />
      <Services services={services} />
      <Contact contact={contact} />
      {/* <About />
      <Testimonial /> */}
    </main>
  );
};

export default MainContent;
