"use client";
import Image from "next/image";
import user from "../../../../public/assets/heroimg.png";
import { OpenSidebar } from "../../../../public/assets/icons";
import { useSelector } from "react-redux";

const SidebarHeader = ({ show, setIsOpen }: any) => {
  const { sidebarTab } = useSelector((state: any) => state.user);
  console.log("sidebarTab", sidebarTab);
  return (
    <>
      <div className="sidebar_header">
        <h2 className="main_heading">{sidebarTab || "Dashboard"}</h2>
        <div className="right_header">
          <div className="user_box">
            <Image src={user} className="user_img" alt="" />
            <div className="user_text">
              <h2>jashangandhi@gmail.com</h2>
              <p>jashan</p>
            </div>
            <button
              className="sidebar_btn d-md-none"
              onClick={() => setIsOpen(!show)}
            >
              <OpenSidebar />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarHeader;
