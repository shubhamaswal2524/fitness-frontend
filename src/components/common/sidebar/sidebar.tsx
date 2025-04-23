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
              <Link href="/dashboard" className="main_heading active ">
                Dasboard
              </Link>
            </li>
            <li>
              <Link href="/personal-information" className="main_heading">
                Presonal informaton
              </Link>
            </li>
            <li>
              <Link href="/workout-lists" className="main_heading">
                Workout Lists
              </Link>
            </li>
            <li>
              <Link href="/" className="main_heading">
                Home
              </Link>
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
