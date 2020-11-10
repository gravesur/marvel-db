import React from 'react';

import './home-page.scss';
import image from './cap.jpg';

const HomePage = () => {
  return (
    <div className="container my-5">
      <div className="home-container col-md mx-auto text-center mt-5">
        <h3 className="my-5">Welcome to Marvel Data Base</h3>
        <img className="img-fluid" src={image} alt="Greetings" />
      </div>
    </div>
  );
};

export default HomePage;
