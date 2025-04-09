import Userlayout from "@/components/layout/userlayout";
import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
     <Userlayout> {children}</Userlayout>
    </>
  );
};

export default layout;
