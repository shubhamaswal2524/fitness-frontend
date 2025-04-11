"use client";
import { usePathname } from "next/navigation";
import AuthLayout from "../(auth)/Authlayout";
import AppLayout from "../(main)/layout";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/dashboard") ||
      pathname.startsWith("/personal-information") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <AppLayout>{children}</AppLayout>
      )}
    </>
  );
}
