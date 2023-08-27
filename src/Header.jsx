import React from "react";

import logo from "./assets/whole@2x.png";
const Header = ({setModal}) => {
  return (
   
      <div className="container  d-flex justify-content-between align-items-center fixed-top
      ">
        <img style={{ width: "150px" }} src={logo} alt="logo" />

        <div
          style={{
            borderRadius: "18px",
            padding: "6px 0px",
            paddingLeft: "15px",
          }}
          className="bg-light"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            style={{ width: "297px",outline:'none' }}
            type="text"
            className="border-0 bg-transparent"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <p style={{ cursor: "pointer" }} className="mt-3"onClick={()=>setModal(true)}>
          Create An Account <span className="text-primary">its free!</span>
        </p>
      </div>
    
  );
};

export default Header;
