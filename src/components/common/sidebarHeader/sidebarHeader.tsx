"use client";
import Image from "next/image";
import user from "../../../../public/assets/heroimg.png";
import { OpenSidebar } from "../../../../public/assets/icons";
import { useSelector } from "react-redux";

const SidebarHeader = ({ show, setIsOpen }: any) => {
  const { sidebarTab, profile } = useSelector((state: any) => state.user);
  console.log("profile", profile);
  return (
    <>
      <div className="sidebar_header">
        <h2 className="main_heading">{sidebarTab || "Dashboard"}</h2>
        <div className="right_header">
          <div className="user_box">
            {profile?.profilePicture ? (
              <Image
                src={profile?.profilePicture || user}
                className="user_img"
                alt=""
                width={40} // or whatever size suits your layout
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            ) : null}
            <div className="user_text">
              <h2>{profile?.email || ""}</h2>
              <p>{profile?.name || ""}</p>
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
