"use client";
import { usePathname } from "next/navigation";
import AuthLayout from "../(auth)/Authlayout";
import AppLayout from "../(main)/layout";
import MainLayout from "@/components/layout/mainlayout";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/dashboard") ||
      pathname.startsWith("/personal-information") ||
      pathname.startsWith("/daily-diet") ||
      pathname.startsWith("/notifications") ||
      pathname.startsWith("/personal-information") ||
      pathname.startsWith("/workout-lists") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>
          <AppLayout>{children}</AppLayout>
        </MainLayout>
      )}
    </>
  );
}
