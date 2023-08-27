import React, { useState } from "react";
import icons from "./assets/icon.png";
import icon2 from './assets/icon2.png'
import post1 from './assets/1.png'
import post2 from './assets/2.png'
import post3 from './assets/3.png'
const PostSection = () => {
    const [join, setJoin] = useState(false);
    const conditionalStyle = {
        width: join ? '175px' : '125px',
        borderRadius: '4px',
        height: '36px',
      };
  return (
    <div >
      <div
        style={{ maxWidth: "1090px", marginTop: "40px", padding: "0px 30px" }}
        className="mx-auto d-flex justify-content-between align-items-center border-bottom"
      >
        <div className="d-block d-md-none">
          <p style={{ fontWeight: "500" }} className="font-weight-bold">
            All Post(32)
          </p>
        </div>
        <div className="d-none d-md-block pt-1">
          <div className="d-flex ">
            <p style={{ fontWeight: "500" }} className="font-weight-bold">
              All Post(32)
            </p>
            <p className="mx-3">Article</p>
            <p>Event</p>
            <p className="mx-3">Education</p>
            <p className="mx-3">Job</p>
          </div>
        </div>
        <div style={{paddingBottom:'10px'}} className="d-none d-md-block ">
          <select
            style={{
              width: "133px",
              borderRadius: "4px",
              height: "36px",
              backgroundColor: "#edeef0",
              marginTop:'3px',
              
            }}
            className="mx-3 border-0 px-2 "
            name="All"
            id=""
          >
            <option value="All">Write a Post</option>
          </select>
          <button
          onClick={() => setJoin(!join)}
            style={conditionalStyle}
            className={` ${join?'btn btn-outline-secondary':'border-0 bg-primary text-white'}`}
          >
            {join?<img src={icon2} alt="add-icon" />:<img src={icons} alt="add-icon" />}
            {join ? "Leave Group" : "Join Group"}

          </button>
        </div>
        <div className="d-block d-md-none mb-3">
          <select 
          style={{
            width: "133px",
              borderRadius: "4px",
              height: "36px",
              backgroundColor: "#edeef0",
              marginTop:'3px',
              outline:'none'
          }}
           className="border-0 px-2 "
          name="All" id="">
           
            <option value="All"> Filter: All</option>
          </select>
        </div>
      </div>
      

      <div style={{ maxWidth: "1090px", marginTop: "40px",}} className="mx-auto px-md-3">
           <div>
             <div>
               <img src={post1} alt="" />
             </div>

             <div>
               <img src={post3} alt="" />
             </div>
             <div>
               <img src={post2} alt="" />
             </div>
            
           </div>
      </div>
    </div>
  );
};
export default PostSection;
