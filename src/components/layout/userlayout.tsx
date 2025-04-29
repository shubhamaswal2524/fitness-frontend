"use client";
import React, { useEffect } from "react";
import Sidebar from "../common/sidebar/sidebar";
import SidebarHeader from "../common/sidebarHeader/sidebarHeader";
import { useGetProfileQuery } from "@/lib/slices/user/userApiSlice";
import { setUserProfile } from "@/lib/slices/user/userSlice";
import { useDispatch } from "react-redux";

const Userlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch();
  const { data: profileData, isSuccess, refetch } = useGetProfileQuery({});

  useEffect(() => {
    if (isSuccess && profileData) {
      dispatch(setUserProfile(profileData?.data)); // ✅ Set profile in store
    }
  }, [isSuccess, profileData, dispatch]);
  return (
    <>
      <div className="userlayout">
        <Sidebar />
        <SidebarHeader />
        <div className="userlayout_in">{children}</div>
      </div>
    </>
  );
};

export default Userlayout;
