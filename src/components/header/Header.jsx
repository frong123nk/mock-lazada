import React from "react";
import "./Header.css";
import { Search } from "../Search/Search";
import { BiCart } from "react-icons/bi";
export const Header = () => {
  return (
    <header>
      <div id="left"></div>
      <div id="container-link-bar">
        <div id="link-bar">
          <span style={{ color: "#0f1568" }}>SAVE MORE ON APP</span>
          <span style={{ color: "#0f1568" }}>SELL ON LAZADA</span>
          <span>CUSTOMER CARE</span>
          <span>TRACK MY ORDER</span>
          <span>LOGIN</span>
          <span>SIGNUP</span>
          <span>เปลี่ยนภาษา</span>
        </div>
      </div>
      <div id="right"></div>
      <div id="container-logo-bar">
        <div id="logo-bar-content">
          <div className="logo-content">
            <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" />
          </div>
          <div id="tag-search">
            <Search />
          </div>
          <BiCart className="cart-logo" style={{ color: "#00005c" }} />
          <div className="header-banner">
            <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18s7ESBr0gK0jSZFnXXbRRXXa.jpg" />
          </div>
        </div>
      </div>
    </header>
  );
};
