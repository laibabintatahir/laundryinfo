import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header>
        <div className="container">
          <div>
          <a href="/" className="logo">
              Laiba<span className="accent">tahir</span>
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">App</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/download">Download</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
