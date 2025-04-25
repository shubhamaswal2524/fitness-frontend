// utils/IdleTimer.tsx
"use client";

import { useIdleTimer } from "react-idle-timer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { useDispatch } from "react-redux";
// adjust path to your logout action

const IdleTimer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleIdle = () => {
    console.log("User is idle");

    // Clear token and state
    destroyCookie(null, "token", { path: "/" });
    localStorage.clear();
    sessionStorage.clear();
    // Redirect to login or home
    router.push("/login");
  };

  useIdleTimer({
    timeout: 1000 * 60 * 60, // 60 minutes
    onIdle: handleIdle,
    debounce: 500,
  });

  return null; // this component doesn't render anything
};

export default IdleTimer;
