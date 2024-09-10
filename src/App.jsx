import React from "react";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop";
import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";
import { ScrollProvider } from "./utils/ScrollContext";
import ScrollToTopButton from "./utils/ScrollUpBtn";

function App() {
  return (
    <>
      <ScrollProvider>
        <div>
          <ScrollToTopButton />
          <ScrollToTop />
          <Header />
          <AboutUs />
          <Testimonials />
          <Footer />
          <Copyright />
        </div>
      </ScrollProvider>
    </>
  );
}

export default App;
