import React from "react";
import { useState } from "react";
import Destination from "./Destination/Destination";
import "./header.style.css";

const LeftSide = ({ click, setClick }) => {
  return (
    <>
      <nav className="left-side links">
        <p onClick={() => (!click ? setClick(true) : setClick(false))}>
          Destination <i className="far fa-chevron-down"></i>
        </p>
        <a href="#blog">Blogs</a>
        <a href="#culture">Culture</a>
      </nav>
      {click && <Destination />}
    </>
  );
};

const MidSide = () => {
  return (
    <div className="mid-side logo">
      <p>Travel.</p>
    </div>
  );
};

const RightSide = ({ click, setClick }) => {
  return (
    <div className="right-side search-area">
      <div className="search-box">
        <input type="text" autoComplete="off" placeholder="Search Places" />
        <i className="far fa-search"></i>
      </div>
      <div
        className="select-lang"
        onClick={() => (!click ? setClick(true) : setClick(false))}
      >
        <div className="icons">
          <i className="far fa-globe"></i>
          <i className="far fa-chevron-down"></i>
        </div>
        {click && (
          <div className="lang-list">
            <p>English</p>
            <p>हिन्दी</p>
            <p>বাংলা</p>
            <p>ਪੰਜਾਬੀ </p>
            <p>ગુજરાતી</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [destClick, setDestClick] = useState(false);
  const [langClick, setLangClick] = useState(false);

  return (
    <div className="header">
      <LeftSide click={destClick} setClick={setDestClick} />
      <MidSide />
      <RightSide click={langClick} setClick={setLangClick} />
    </div>
  );
};

export default Header;
