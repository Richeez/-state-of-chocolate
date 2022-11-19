import { useEffect, useRef, useState, useMemo } from "react";
import { Footer, MainContent, NavBar } from "./components";
import Globalstyles from "./globalStyles";

function App() {
  const menuBar = useRef(null);
  const header = useRef(null);
  const menu = useRef(null);
  const home = useRef(null);
  const services = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const callBackFunc = (entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, options);
    const currentTarget = header.current;
    if (home.current) observer.observe(home.current);
    if (!isInView) {
      currentTarget.classList.add("header");
    } else {
      setIsInView(true);
      currentTarget.classList.remove("header");
    }

    return () => {
      if (home.current) observer.unobserve(home.current);
    };
  }, [home, options]);

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
        header={header}
        scrollToPage={scrollToPage}
        home={home}
        isInView={isInView}
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
