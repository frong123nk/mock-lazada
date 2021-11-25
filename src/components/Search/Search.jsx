import React from "react";
import "./Search.css";
import { BiSearch } from "react-icons/bi";
import search from "./icon/search.png";
export const Search = () => {
  return (
    <form id="container-search">
      <button
        className="searchButton-m"
        style={{ backgroundImage: `url(${search})` }}
      ></button>
      <input
        id="search"
        type="text"
        placeholder="Search in Lazada"
        aria-label="Search posts"
      />
      <button
        className="searchButton"
        style={{ backgroundImage: `url(${search})` }}
      ></button>
    </form>
  );
};
