import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

const Header = () => {
  return (
    <header>
      <h1>Google Books App</h1>
      <nav>
        <ul>
          <li><Link to="/">Search</Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;