"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/mainlogo.png";
import Button from "../button/button";
import { logout } from "@/lib/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { setSidebarTabs } from "@/lib/slices/user/userSlice";

const Sidebar = ({ show }: any) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
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

  const navLinks = [
    { href: "dashboard", label: "Dashboard" },
    { href: "personal-information", label: "Personal Information" },
    { href: "workout-lists", label: "Workout Lists" },
    { href: "daily-diet", label: "Daily Diet" },
    { href: "notifications", label: "Notifications" },
  ];
  return (
    <>
      <div className={`sidebar ${show ? "active" : ""}`}>
        <div className="logo">
         <Link href="/">
          <Image src={logo} alt="" /> </Link>
        </div>
        <div className="sidebar_in">
          <ul>
            {navLinks?.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className={`main_heading ${
                    pathname === link.href ? "active" : ""
                  }`}
                  onClick={() => dispatch(setSidebarTabs(link?.href))}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
