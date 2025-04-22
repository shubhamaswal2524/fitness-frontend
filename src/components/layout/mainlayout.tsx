import React from "react";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="main_layout">
      <Header />
        {children}
      <Footer />
        </div> 
    </>
  );
};

export default MainLayout;
