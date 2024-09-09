import React from "react";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop";
import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";

function App() {
  return (
    <>
      <div>
        <ScrollToTop />
        <Header />
        <AboutUs />
        <Testimonials />
        <Footer />
        <Copyright />
      </div>
    </>
  );
}

export default App;
