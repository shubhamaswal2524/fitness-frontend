"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/mainlogo.png";
import Button from "../button/button";
import { logout } from "@/lib/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-bootstrap";

const Sidebar = ({ show }: any) => {
  const dispatch = useDispatch();
  const handleLogout = async (e: any) => {
    try {
      e.preventDefault();
      dispatch(logout());
      // toast.success("Logged out successfully.");
      localStorage.clear();
      sessionStorage.clear();
      window.location.replace("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <>
      <div className={`sidebar ${show ? "active" : ""}`}>
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <div className="sidebar_in">
          <ul>
            <li>
              <NavLink href="/dashboard" className="main_heading active ">
                Dasboard
              </NavLink>
            </li>
            <li>
              <NavLink href="/personal-information" className="main_heading">
                Presonal informaton
              </NavLink>
            </li>
            <li>
              <NavLink href="/" className="main_heading">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/" className="main_heading">
                Home
              </NavLink>
            </li>
          </ul>
          <Button
            onClick={(e: any) => {
              handleLogout(e);
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
