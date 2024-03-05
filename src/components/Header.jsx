import React from "react";
import { Logo, LogoText, Notification, SearchIcon } from "../assets/Icons";
import { NavLink } from "react-router-dom"; // Import NavLink
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import MoviesOpen from "../pages/MoviesOpen";
import Home from "../pages/Home";
import Support from "../pages/Support";
import Subscription from "../pages/Subscription";
import MoviesShow from "../pages/MoviesShow";
import ShowOpen from "../pages/ShowOpen";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black via-transparent to-transparent">
      <div className="container">
        <nav className="flex items-center justify-between py-7">
          <div className="nav-left flex">
            <NavLink to="/" className="logo flex items-center gap-2">
              <Logo />
              <div className="lg:block sm:hidden">
                <LogoText />
              </div>
            </NavLink>
          </div>
          <div className="nav-center border-4 border-black-12 rounded-md px-1 py-1 bg-black overflow-hidden">
            <ul className="flex items-center lg:gap-5 md:gap-0">
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 sm:px-3 py-1">
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 sm:px-3 py-1">
                <NavLink to="/showopen" className="text-white">
                  Movie&Shows
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 sm:px-3 py-1">
                <NavLink to="/support" className="text-white">
                  Support
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500 sm:px-3 py-1">
                <NavLink to="/subscriptions" className="text-white">
                  Subscriptions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right flex items-center lg:gap-10 sm:gap-5">
            <button>
              <SearchIcon />
            </button>
            <button>
              <Notification />
            </button>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/showopen" element={<ShowOpen />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </header>
  );
};

export default Header;
