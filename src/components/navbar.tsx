import React, { useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    // <nav className="fixed w-screen px-4">
    //   <div className="navbar">
    //     <div className="flex-1">
    //       <a href="#">
    //         <Image
    //           src={"/logo.png"}
    //           height={100}
    //           width={100}
    //           className="w-14"
    //           alt="logo"
    //         />
    //       </a>
    //     </div>
    //     <div className="flex-none">
    //       <ul className={"menu menu-" + (openNav ? "vertical": "horizontal") + " px-1 uppercase"+ (openNav ? "" : " max-lg:hidden")}>
    //         <li>
    //           <a href="">Prices</a>
    //         </li>
    //         <li>
    //           <a href="">Contact</a>
    //         </li>
    //         <li>
    //           <a href="">About Us</a>
    //         </li>
    //       </ul>
    //       <button className="btn btn-square btn-ghost lg:hidden" onClick={() => setOpenNav(!openNav)}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           className="inline-block h-5 w-5 stroke-current"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar absolute top-0 bg-transparent px-2 lg:px-4">
      <div className="navbar-start">
        <Image src={"/logo.png"} className="w-14" alt={"logo"} width={100} height={100} />
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-md z-[1] mt-3 w-28 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
