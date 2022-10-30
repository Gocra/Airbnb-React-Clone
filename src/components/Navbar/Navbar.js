import React from "react";
import logo from "../../assets/logo.svg";
import { ReactComponent as WorldIcon } from "../../assets/wireframeWorld.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar />
      <Actions />
    </nav>
  );
};

const Logo = () => {
  return (
    <a href="#" className="logo-container">
      <img className="logo" src={logo} />
    </a>
  );
};

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-buttons-container">
        <button>Anywhere</button>
        <button>Any week</button>
        <button className="guest">
          <span>Add guests</span>
          <div className="search-icon">
            <SearchIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

const Actions = () => {
  return (
    <div className="user">
      <a className="link" href="#">
        Become a host
      </a>
      <button className="world">
        <WorldIcon />
      </button>
      <button className="account">
        <div className="hamburger">
          <HamburgerIcon />
        </div>
        <div className="pfp">
          <UserIcon />
        </div>
      </button>
    </div>
  );
};

export default Navbar;
