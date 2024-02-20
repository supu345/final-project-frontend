import React from "react";
import logo from "../../assets/images/logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={"max-w-screen-2xl shadow-2xl"}>
      <section className="footer grid bg-base-200 lg:p-10 p-5 text-primary">
        <div className="h-10 w-10 ">
          <img src={logo} alt="logo" />
          <span className="text-2xl text-blue-900">Eshop</span>
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </section>
      <section className="footer items-center bg-primary text-base-100 lg:px-10 px-6 py-5">
        <aside className="items-center grid-flow-col">
          <p>
            Copyright © <span className={"font-semibold"}>{date}-E-comm</span>{" "}
            All right reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-8 text-3xl md:place-self-center md:justify-self-end">
          <a>
            <FaFacebookSquare />
          </a>
          <a>
            <FaInstagramSquare />
          </a>
          <a>
            <FaYoutubeSquare />
          </a>
          <a>
            <FaTwitterSquare />
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
