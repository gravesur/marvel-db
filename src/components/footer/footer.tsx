import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
  return (
    <footer id="main-footer" className="text-center text-white bg-dark pt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <p>
              &copy; 2019 Mortek, Inc.
              <a href="http://marvel.com" className="link text-white ml-3">
                Data provided by Marvel. © 2019 MARVEL
              </a>
              <Link to="#" className="link text-white ml-3">
                Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
