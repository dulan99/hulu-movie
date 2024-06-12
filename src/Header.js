/** @format */

import React from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import FlashIcon from "@mui/icons-material/FlashOn";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Header() {
  return (
    <div className='header'>
      <div className='header__icons'>
        <div className='header__icon header__icon--active'>
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className='header__icon'>
          <FlashIcon />
          <p>Trending</p>
        </div>
        <div className='header__icon'>
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className='header__icon'>
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>
        <div className='header__icon'>
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className='header__icon'>
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <div style={{cursor:"pointer"}}>
        <h1>CineFlix</h1>
        <img
          className='img-logo'
          src="/logo.png"
          // src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
          alt='hulu logo'
        />
        </div>
    </div>
  );
}

export default Header;
