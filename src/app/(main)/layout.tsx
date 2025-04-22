"use client";

import { useAppSelector } from "@/lib/store";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    } else {
      setCheckingAuth(false);
    }
  }, [token, router]);

  if (checkingAuth) return null; // Don't flash layout during redirect
  return (
    <>
      <div className="main_layout_main">{children}</div>
    </>
  );
};

export default AppLayout;
