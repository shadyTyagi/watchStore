import React from "react";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-6">
      <Link to="/" className="max-w-7xl">
        <div className="flex items-center font-bold ml-[20px]">
          <FaApple className="text-2xl" />
          <h1 className="text-xl font-medium">WATCH</h1>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
