import React from "react";
import Category from "./Category";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Quote from "./Quote";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3" style={{fontSize:"18px"}} >
        <div className="container">
          <Link to="/">
            <a className="navbar-brand fw-bold fs-4">INTERIAZ</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link navtext active ">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories">
                  <a className="nav-link">Categories</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio">
                  <a className="nav-link">Gallery</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/quote">
                  <a className="nav-link" aria-current="page">
                    Free Quote
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}
