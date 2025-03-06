import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full sd:w-2/3 text-gray-600 leading-6">
            Curecare is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service.
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/">
              <li>Home</li>{" "}
            </NavLink>
            <NavLink to="/about">
              <li className="py-1">About us</li>{" "}
            </NavLink>
            <NavLink to="/contact">
              <li className="py-1">Contact</li>{" "}
            </NavLink>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 5748290280</li>
            <li>curecare@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* copyright */}
        <div className="border-t border-secondary">
          <p className="py-5 text-sm text-center">
            Copyright 2024 @ curecare.dev - All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
