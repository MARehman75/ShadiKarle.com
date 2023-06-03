import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Contact",
    },
    {
      id: 4,
      link: "FAQs",
    },
    
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-pink-500 ">
      <div className="w-[11rem] mt-3 h-9 ml-6">
        <img src="./images/logo.png" alt="portfolio" />
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" text-white px-4 font-medium capitalize cursor-pointer hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className=" pr-4 z-10 text-orange-100 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center w-full absolute top-0 left-0 h-screen bg-black text-orange-100">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" text-orange-100 px-4 font-medium capitalize cursor-pointer hover:scale-105 duration-200 py-6 text-2xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
