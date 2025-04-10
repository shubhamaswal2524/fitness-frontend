import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/assets/mainlogo.png"
import Button from "../button/button";
import CommonArrowButton from "../commonArrowBtn/commonArrowBtn";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
            <Image src={logo}  alt="logo"/>
        </div>
        <div className="sidebar_in">
          <ul>
            <li>
              <Link href="/dashboard" className="main_heading active ">Dasboard</Link>
            </li>
            <li>
              <Link href="/personal-information" className="main_heading">Presonal informaton</Link>
            </li>
            <li>
              <Link href="/" className="main_heading">Home</Link>
            </li>
            <li>
              <Link href="/" className="main_heading">Home</Link>
            </li>
          </ul>
          <Button>Logout</Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
