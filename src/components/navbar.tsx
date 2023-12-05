import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="navbar relative top-0 bg-transparent px-2 lg:px-4">
      <div className="navbar-start">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            className="w-14"
            alt={"logo"}
            width={100}
            height={100}
          />
        </Link>
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
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/rooms">Rooms</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/rooms">Rooms</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
