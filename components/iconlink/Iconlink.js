import React from "react";
import "./Iconlink.css";
import Image from "next/image";

const Iconlink = ({ icon, text, isActive, setActiveLink, isBtn }) => {
  return (
    <div className={`icon ${isActive ? "active" : ""} ${isBtn ? "btn" : ""}`} onClick={setActiveLink}>
      <Image src={icon} alt="" className="icon-img" />
      <p>{text}</p>
    </div>
  );
};

export default Iconlink;
