import React, { useState } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <button className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
    <i class="fa-solid fa-arrow-up fa-lg"></i>
    </button>
  );
};

export default ScrollButton;