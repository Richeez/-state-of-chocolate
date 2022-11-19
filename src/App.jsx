import { useRef } from "react";
import { Footer, MainContent, NavBar } from "./components";
import Globalstyles from "./globalStyles";

function App() {
  const menuBar = useRef(null);
  const menu = useRef(null);
  const home = useRef(null);
  const services = useRef(null);

  const toggleMenu = () => {
    const isMenu = menu?.current;
    const isMenuBar = menuBar?.current;
    isMenu?.classList.toggle("open");
    isMenuBar?.classList.toggle("animate");
  };

  const scrollToPage = (page) => {
    window.scrollTo({
      top: page.current.offsetTop,
    });
  };

  return (
    <>
      <Globalstyles />
      <NavBar
        scrollToPage={scrollToPage}
        home={home}
        services={services}
        toggleMenu={toggleMenu}
        menuBar={menuBar}
        menu={menu}
      />
      <MainContent home={home} services={services} />
      <Footer />
    </>
  );
}

export default App;
