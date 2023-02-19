import "./Searchbar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Searchbar() {
  const [term, setTerm] = useState("");
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    //query params ?q=somedynamic variable
    history(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
