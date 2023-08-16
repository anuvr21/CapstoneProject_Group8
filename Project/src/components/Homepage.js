import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {

 const images = [

  'images/bgimg01.jpg',

  'images/bgimg02.jpg',

  'images/bgimg03.jpg',

  // Add more image URLs

 ];

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 useEffect(() => {

  const interval = setInterval(() => {

   setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);

  }, 3000); // Change image every 3 seconds

  return () => {

   clearInterval(interval);

  };

 }, []);

 return (

  <div>

   <nav>

    <div className="logo">

     <img src="logo192.jpg" alt="Logo" />

    </div>

    <ul className="nav-links">

     <li><a href="/">Home</a></li>

     <li>
          <Link to="/UserRegistration">Registration</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>


     <li><Link to="/Login" className="login-button">Login</Link></li>

    </ul>

   </nav>

   <main className="main" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>

    <div className="shopnow-container">

     <button className="shopnow-button">Book Now</button>

    </div>

   </main>

  </div>

 );

};

export default HomePage;