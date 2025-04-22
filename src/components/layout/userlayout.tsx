"use client";
import React from "react";
import Sidebar from "../common/sidebar/sidebar";
import SidebarHeader from "../common/sidebarHeader/sidebarHeader";

const Userlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="userlayout">
        <Sidebar/>
        <SidebarHeader/>
        <div className="userlayout_in">{children}</div>
      </div>
    </>
  );
};

export default Userlayout;
