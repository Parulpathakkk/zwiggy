import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <header className="flex justify-between items-center px-[2cqw]">
      <div className="w-[30%]">
        <Link to="/">
          <img className="w-[6cqw] h-[7cqw]" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="w-[70%]">
        <div className="flex gap-[5cqw] justify-end items-center font-poppins md:text-[1.2cqw] ">
          {/* Login/Logout */}
          <button
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
            className="bg-gray-200 px-[1cqw] py-[0.5cqw] hover:bg-gray-300 transition-all"
          >
            {btnName}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
