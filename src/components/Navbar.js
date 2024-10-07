import React from 'react';
import logo from '../img/logo.png'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<header className="bg-bb h-24 px-4 hidden md:flex items-center relative">

  <div className="flex items-center h-full">
    <a href="/" className="flex items-center h-full">
      <img src={logo} alt="Logo" className="h-full w-auto max-w-[250px] object-contain" />
    </a>
  </div>
  {/* Middle: Navigation links */}
  <nav className="flex-1">
    <ul className="flex justify-center items-center font-semibold text-base lg:text-lg">
      <li className="p-3 xl:p-6 active">
        <a href="/">
          <span>Home</span>
        </a>
      </li>
      <li className="p-3 xl:p-6">
        <Link to="/Appointment">
          <span>Appointment</span>
        </Link>
      </li>
      <li className="p-3 xl:p-6">
        <Link to="/Records">
          <span>Records</span>
        </Link>
      </li>
      <li className="p-3 xl:p-6">
        <Link to="/Billing">
          <span>Billing</span>
        </Link>
      </li>
      <li className="p-3 xl:p-6">
        <a href="/skills">
          <span>Reports</span>
        </a>
      </li>
    </ul>
  </nav>

  {/* Right side: Sign Out button and User avatar */}
  <nav className="flex items-center space-x-4">
    <button className="bg-white text-gray-700 font-semibold py-2 px-6 border border-gray-300 rounded-lg shadow hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 ease-in-out">
      Sign Out
    </button>
    <button className="bg-bb p-2 rounded-full hover:border-gray-400 transition-all duration-200 ease-in-out">
  <FaUser className="w-12 h-12 bg-bb rounded-full object-cover" />
</button>
  </nav>
</header>

  );
};

export default Navbar;
