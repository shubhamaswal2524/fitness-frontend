"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/store";
import { ReactNode } from "react";
import Userlayout from "@/components/layout/userlayout";
import IdleTimer from "@/utils/IdleTimer";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  // need this
  // useEffect(() => {
  //   if (!token) {
  //     router.push("/login");
  //   } else {
  //     setCheckingAuth(false);
  //   }
  // }, [token, router]);

  // if (checkingAuth) return null; // Don't flash layout during redirect

  return (
    <>
      <IdleTimer />
      <Userlayout>{children}</Userlayout>
    </>
  );
};

export default AuthLayout;
