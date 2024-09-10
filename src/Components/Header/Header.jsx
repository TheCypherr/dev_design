import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScroll } from "../../utils/ScrollContext";

const Header = () => {
  // imported scrollToSection from ScrollContext
  const { scrollToSection } = useScroll();
  // useState to open menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAboutScroll = (sectionKey) => {
    setIsOpen(false);
    scrollToSection(sectionKey);
  };

  const handleTestScroll = (testKey) => {
    setIsOpen(false);
    scrollToSection(testKey);
  };

  const handleFooterScroll = (footKey) => {
    setIsOpen(false);
    scrollToSection(footKey);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <section className="header-wrapper back">
      <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src="./Logo.png" alt="" />
          </Link>
        </div>

        <div onClick={toggleMenu} className="icon-menu">
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {isOpen && (
          <div className="h-two-main">
            <div className="h-links-new">
              <Link to="/" className="custom-links">
                Home
              </Link>
              <Link
                to="/"
                className="custom-links"
                onClick={() => handleAboutScroll("aboutScroll")}
              >
                About Us
              </Link>
              <Link
                to="/"
                className="custom-links"
                onClick={() => handleTestScroll("testScroll")}
              >
                Testimonials
              </Link>
              <Link
                to="/"
                className="custom-links"
                onClick={() => handleFooterScroll("footerScroll")}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

        <div className="h-links">
          <Link to="/" className="custom-links">
            Home
          </Link>
          <Link
            to="/"
            className="custom-links"
            onClick={() => handleAboutScroll("aboutScroll")}
          >
            About Us
          </Link>
          <Link
            to="/"
            className="custom-links"
            onClick={() => handleTestScroll("testScroll")}
          >
            Testimonials
          </Link>
          <Link
            to="/"
            className="custom-links"
            onClick={() => handleFooterScroll("footerScroll")}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="slider">
        <Slider {...settings}>
          <div className="first-slide">
            <h1>Creative Mobile Photographer</h1>
            <h2>Making waves in Lagos City</h2>
          </div>
          <div className="second-slide">
            <h1>Lifestyle Photography</h1>
            <h2>Through a Mobile Phone Lens</h2>
          </div>
          <div className="third-slide">
            <h1>Capturing Moments</h1>
            <h2>Through Beautiful Lenses</h2>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Header;
