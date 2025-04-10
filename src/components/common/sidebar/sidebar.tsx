import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/mainlogo.png";
import Button from "../button/button";

const Sidebar = ({show }: any) => {
  return (
    <>
      <div className={
        `sidebar ${show ? "active" : ""}`
      }>
        <div className="logo">
            <Image src={logo}  alt="logo"/>
        </div>
        <div className="sidebar_in">
          <ul>
            <li>
              <Link href="/dashboard" className="main_heading active ">Dasboard</Link>
            </li>
            <li>
              <Link href="/personal-information" className="main_heading">Presonal informaton</Link>
            </li>
            <li>
              <Link href="/" className="main_heading">Home</Link>
            </li>
            <li>
              <Link href="/" className="main_heading">Home</Link>
            </li>
          </ul>
          <Button>Logout</Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
