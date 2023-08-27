import React, { useState } from "react";
import banner from "./assets/banner2.avif";
import banner2 from "./assets/banners.png";
import arrowIcon from "./assets/arrow.svg";
const HomeBanner = ({setModal}) => {
  const [join, setJoin] = useState(false);
  const bannerStyle = {
    backgroundImage: `url(${banner})`, // Use the imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",

    height: "80vh",
  };
  const banners = {
    backgroundImage: `url(${banner2})`, // Use the imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",

    height: "80vh",
  };

  return (
    <div style={bannerStyle}>
      <div style={banners} className="position-relative">
        <button
        
          style={{ top: "5%", left: "70%" }}
          className="
          d-block d-md-none   btn bg-transparent border border-white bg-none text-white position-relative "
          onClick={() => {
            setJoin(!join)
            setModal(true)}}
        >
          {join ? "Leave Group" : "Join Group"}
        </button>
        <img
        style={{left:'10%',top:'-1.5%'}}
        className="d-block d-md-none position-relative " src={arrowIcon} alt="awworicon" />
        <div style={{ top: "70%", left: "10%" }} className="position-absolute">
          <h2>Computer Engineering</h2>
          <small>142,765 Computer Engineers follow this</small>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
