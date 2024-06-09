import "locomotive-scroll/dist/locomotive-scroll.min.css";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { useEffect, useRef, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { dark } from "./styles/Themes";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(true);

  const handleLoading = () => {
    setLoaded(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{!loaded ? null : <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="app" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
