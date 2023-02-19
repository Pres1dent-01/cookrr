import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cookrr!!!</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
