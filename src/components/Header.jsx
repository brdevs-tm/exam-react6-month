import React, { useState } from "react";
import {
  Hamburger,
  Logo,
  LogoText,
  Minus,
  Notification,
  RightArrow,
  SearchIcon,
} from "../assets/Icons";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MoviesOpen from "../pages/MoviesOpen";
import Home from "../pages/Home";
import Support from "../pages/Support";
import Subscription from "../pages/Subscription";
import MoviesShow from "../pages/MoviesShow";
import ShowOpen from "../pages/ShowOpen";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const preventPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <header className="bg-gradient-to-b from-black via-transparent to-transparent">
      <div className="container">
        <nav className="flex items-center justify-between py-7">
          <div className="nav-left flex">
            <NavLink to="/" className="logo flex items-center gap-2">
              <Logo />
              <div className="block md:hidden lg:block">
                <LogoText />
              </div>
            </NavLink>
          </div>
          <div className="nav-center hidden lg:block border-4 border-black-12 rounded-md px-1 py-1 bg-black overflow-hidden">
            <ul className="flex items-start gap-5">
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                <NavLink to="/showopen" className="text-white">
                  Movie&Shows
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                <NavLink to="/support" className="text-white">
                  Support
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                <NavLink to="/subscriptions" className="text-white">
                  Subscriptions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right flex items-center ">
            <div className="wrapped-menu lg:hidden">
              <div
                style={{
                  display: isMenuOpen ? "none" : "block",
                }}
              >
                <button
                  className="block bg-black-10 border-2 rounded-md border-black-15 p-5"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <RightArrow /> : <Hamburger />}
                </button>
              </div>
              <div
                className="nav-wrapped-menu p-10 flex-col items-end"
                style={{
                  display: isMenuOpen ? "flex" : "none",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 1)",
                  position: "fixed",
                  top: 0,
                  right: 0,
                  zIndex: 1000,
                  transition: "all 0.5s ease",
                }}
              >
                <button className="block p-5" onClick={toggleMenu}>
                  <RightArrow onClick={preventPropagation} />
                </button>
                <ul className="flex items-end flex-col gap-5">
                  <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                    <NavLink to="/" className="text-white">
                      Home
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                    <NavLink to="/showopen" className="text-white">
                      Movie&Shows
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                    <NavLink to="/support" className="text-white">
                      Support
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 py-1">
                    <NavLink to="/subscriptions" className="text-white">
                      Subscriptions
                    </NavLink>
                  </li>
                </ul>
                <div className="flex items-end flex-col px-6 py-2 mt-10 gap-10">
                  <button className="flex items-center justify-center lg:flex">
                    <SearchIcon />
                  </button>
                  <button className="flex items-center justify-center  lg:flex">
                    <Notification />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button className="hidden items-center justify-center lg:flex">
                <SearchIcon />
              </button>
              <button className="hidden items-center justify-center  lg:flex">
                <Notification />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/showopen" element={<MoviesOpen />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </header>
  );
};

export default Header;
