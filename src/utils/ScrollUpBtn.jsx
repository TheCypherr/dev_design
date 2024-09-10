import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        // You can adjust this value
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.scrollToTopButton}>
          &#8679;
        </button>
      )}
    </>
  );
}

const styles = {
  scrollToTopButton: {
    position: "fixed",
    bottom: "50px",
    right: "30px",
    padding: "10px 15px",
    fontSize: "22px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 1000,
  },
};

export default ScrollToTopButton;
