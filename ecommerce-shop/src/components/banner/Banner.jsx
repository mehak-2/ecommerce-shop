import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src="https://media.istockphoto.com/id/863190232/photo/happy-girl-shopping-in-the-fashion-store.webp?b=1&s=170667a&w=0&k=20&c=uXAmLoZ-OLOtvh8vEhlLDNrZNgL5Cr6nYrcZH61wSzQ=" alt="Cart" />
      </div>
    </div>
  );
};

export default Banner;
