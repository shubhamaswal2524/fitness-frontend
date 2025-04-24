"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "../button/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/mainlogo.png";
import { Container } from "react-bootstrap";
import {
  CloseSidebar,
  OpenSidebar,
  UserIcon,
} from "../../../../public/assets/icons";
import smalllogo from "../../../../public/assets/small logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        const header = document.querySelector(".header");
        if (header) {
          header.classList.add("active");
        }
      } else {
        const header = document.querySelector(".header");
        if (header) {
          header.classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <div className={`overlay ${show ? "active" : ""}`}></div>
      <Container>
        <div className="header_in">
          <Link href={"/"} className="logo">
            <Image src={logo} alt="" />
          </Link>
          <Link href={"/"} className="smalllogo">
            <Image src={smalllogo} alt="" />
          </Link>
          <ul className={show ? "active" : ""}>
            <button className="close_btn" onClick={() => setShow(false)}>
              <CloseSidebar />
            </button>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/shred-x">Shred-x</Link>
            </li>
          </ul>
          <div className="action">
            <Button
              onClick={() => router.push("/login")}
              // className="custom_link"
            >
              Login
            </Button>
            <Button
              className="border_btn sign_up"
              onClick={() => router.push("/signup")}
            >
              <span>Sign Up</span>
              <UserIcon />
            </Button>
            <button onClick={() => setShow(true)} className="side_bar_toggle">
              <OpenSidebar />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
