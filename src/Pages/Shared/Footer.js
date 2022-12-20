import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-10 mt-3 container mx-auto">
        <div>
          <img src="https://i.ibb.co/dptczxv/pre-owned.png" className="h-20" alt="" />
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to ="/coming-soon" className="link link-hover">Branding</Link>
          <Link to ="/coming-soon" className="link link-hover">Design</Link>
          <Link to ="/coming-soon" className="link link-hover">Marketing</Link>
          <Link to ="/coming-soon" className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to ="/coming-soon" className="link link-hover">About us</Link>
          <Link to ="/coming-soon" className="link link-hover">Contact</Link>
          <Link to ="/coming-soon" className="link link-hover">Jobs</Link>
          <Link to ="/coming-soon" className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to ="/coming-soon" className="link link-hover">Terms of use</Link>
          <Link to ="/coming-soon" className="link link-hover">Privacy policy</Link>
          <Link to ="/coming-soon" className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
