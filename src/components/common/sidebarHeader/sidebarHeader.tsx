import Image from "next/image";
import user from "../../../../public/assets/heroimg.png";

const SidebarHeader = () => {
  return (
    <>
      <div className="sidebar_header">
       <h2 className="main_heading">Dashboard</h2>
      <div className="left_header">
    <Image src={user} className="user_img" alt=""/>
    <div className="user_text">
      <h2>jashangandhi@gmail.com</h2>
      <p>jashan</p>
    </div>

      </div>
      </div>
    </>
  );
};

export default SidebarHeader;
