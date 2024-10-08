import { useEffect } from 'react';

import "../styles.css"

const CheckTotop = () => {
  useEffect(() => {
    const element = document.querySelector('.to-top');
    if (element) {
      element.classList.add('for-react');
    }
  }, []);

  return null;
};

export default CheckTotop;
