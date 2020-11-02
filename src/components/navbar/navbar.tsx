import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectedItemDefault } from '../../actions';

import './navbar.scss';

interface NavbarProps {
  selectedItemDefault: Function
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger sticky-top">
      <div className="container my-1">
        <Link to="/" className="navbar-brand">
          MARVEL
        </Link>
        <button className="navbar-toggler" data-toggle="collapse" 
          data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-menu navbar-nav mx-auto">
            <li className="nav-item active mr-4">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item mr-4" onClick={() => props.selectedItemDefault()}>
              <Link to="/characters" className="nav-link">Characters</Link>
            </li>
            <li className="nav-item mr-4" onClick={() => props.selectedItemDefault()}>
              <Link to="/comics" className="nav-link" >Comics</Link>
            </li>
            <li className="nav-item mr-4" onClick={() => props.selectedItemDefault()}>
              <Link to="/events" className="nav-link" >Events</Link>
            </li>
            <li className="nav-item mr-4" onClick={() => props.selectedItemDefault()}>
              <Link to="/series" className="nav-link" >Series</Link>
            </li>
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default connect(null, {
  selectedItemDefault
})(Navbar);