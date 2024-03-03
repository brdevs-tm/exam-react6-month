import React from "react";
import { Logo, LogoText, Notification, SearchIcon } from "../assets/Icons";
import { NavLink } from "react-router-dom"; // Import NavLink
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import MoviesOpen from "../pages/MoviesOpen";
import MoviesShows from "../pages/MoviesShows";
import Home from "../pages/Home";
import Support from "../pages/Support";
import Subscription from "../pages/Subscription";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black via-transparent to-transparent">
      <div className="container">
        <nav className="flex items-center justify-between py-7">
          <div className="nav-left flex">
            <NavLink to="/" className="logo flex items-center gap-2">
              <Logo />
              <LogoText />
            </NavLink>
          </div>
          <div className="nav-center border-4 border-black-12 rounded-md px-1 py-1 bg-black overflow-hidden">
            <ul className="flex items-center gap-5">
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500">
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500">
                <NavLink to="/movieshow" className="text-white">
                  Movie&Shows
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500">
                <NavLink to="/support" className="text-white">
                  Support
                </NavLink>
              </li>
              <li className="flex items-center justify-center px-6 py-2 hover:bg-black-12 rounded-md transition-all duration-500">
                <NavLink to="/subscriptions" className="text-white">
                  Subscriptions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right flex items-center gap-10">
            <SearchIcon />
            <Notification />
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/movieshow" element={<MoviesShows />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </header>
  );
};

export default Header;
