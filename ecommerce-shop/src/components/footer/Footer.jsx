import React, { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import logo from '../navbar/logo.png';
import payment from "./payment.png";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  const footerStyles = {
    backgroundColor: "#FB5C03", // Darker grey color for background
    color: "white", // Set text color to white
  };

  const commonLinkStyles = {
    color: "white", // Set link color to white
  };

  return (
    <div className="">
  
      <div className="px-16 pt-10" style={footerStyles}>
        <div className="up sm:flex justify-around my-4">
          <div className="one flex flex-col flex-1">
            <h1 className="font-medium my-2" style={footerStyles}>
              Categories
            </h1>
            {["Women", "Men", "Shoes", "Accessories", "New Arrivals"].map((category) => (
              <Link
                key={category}
                to=""
                className="text-sm mt-1"
                style={commonLinkStyles}
              >
                {category}
              </Link>
            ))}
          </div>
          <div className="two flex flex-col flex-1">
            <h1 className="font-medium my-2" style={footerStyles}>
              Link
            </h1>
            {["FAQ", "Pages", "Stores", "Compare", "Cookies"].map((link) => (
              <Link
                key={link}
                to=""
                className="text-sm mt-1"
                style={commonLinkStyles}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="three flex-1">
            <h1 className="font-medium my-2" style={footerStyles}>
              About
            </h1>
            <h2 className="text-sm mt-1" style={footerStyles}></h2>
          </div>
          <div className="four flex-1">
            <h1 className="font-medium my-2" style={footerStyles}>
              Contact
            </h1>
            <h2 className="text-sm mt-1" style={footerStyles}></h2>
          </div>
        </div>
        
        <div className="down sm:flex justify-between mt-5">
          <div className="left mt-10 flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-20 h-20" />
            </Link>
            <span className="copyright ml-4 mt-2 text-sm sm:text-normal">
              Copyright 2024. All Rights Reserved
            </span>
          </div>
          <div className="right mt-10">
            <img src={payment} alt="Payment Methods" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
