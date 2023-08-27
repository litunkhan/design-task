import React, { useState } from "react";
import icons from "./assets/icon.png";
import icon2 from "./assets/icon2.png";
import post1 from "./assets/1.png";
import post2 from "./assets/2.png";
import post3 from "./assets/3.png";
import article from "./assets/article.png";
import dots from "./assets/dots.png";
import man1 from "./assets/man1.png";
import man2 from "./assets/man2.png";
import man3 from "./assets/man3.png";
import man4 from "./assets/man4.png";
import share from "./assets/share.png";
import view1 from "./assets/view1.png";
import education from "./assets/education.png";
import meetup from "./assets/meetup.png";
import dates from "./assets/dates.png";
import date from "./assets/date2.png";
import job from "./assets/job.png";
import locations from "./assets/location.png";
import cross from "./assets/cross.png";
import f1 from './assets/f1.png'
import f2 from './assets/f2.png'
import f3 from './assets/f3.png'
import f4 from './assets/f4.png'

const PostSection = () => {
  const [join, setJoin] = useState(false);
  const conditionalStyle = {
    width: join ? "175px" : "125px",
    borderRadius: "4px",
    height: "36px",
  };
  return (
    <div>
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
        <div style={{ paddingBottom: "10px" }} className="d-none d-md-block ">
          <select
            style={{
              width: "133px",
              borderRadius: "4px",
              height: "36px",
              backgroundColor: "#edeef0",
              marginTop: "3px",
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
            className={` ${
              join
                ? "btn btn-outline-secondary"
                : "border-0 bg-primary text-white"
            }`}
          >
            {join ? (
              <img src={icon2} alt="add-icon" />
            ) : (
              <img src={icons} alt="add-icon" />
            )}
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
              marginTop: "3px",
              outline: "none",
            }}
            className="border-0 px-2 "
            name="All"
            id=""
          >
            <option value="All"> Filter: All</option>
          </select>
        </div>
      </div>

      <div
        style={{ maxWidth: "1090px", marginTop: "40px" }}
        className="mx-auto px-md-3 row gx-5"
      >
        <div className="col-md-8">
          <div className="d-flex flex-column border border-secondary">
            <img className="" src={post1} alt="image" />
            <img
              className="mx-3 my-3"
              style={{ width: "70px" }}
              src={article}
              alt="image"
            />
            <div className="d-flex justify-content-between align-items-center px-3">
              <h5 className="mt-1">
                What if famous brands had regular fonts? Meet
                <br /> RegulaBrands!
              </h5>
              <img className="mb-3" src={dots} alt="" />
            </div>
            <p className="px-3">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center px-3">
                <img src={man1} alt="man" />
                <h6 className="mx-1">Sarthak Kamra</h6>
              </div>
              <div>
                <img src={view1} alt="view" />
                <img className=" mx-3" src={share} alt="shareimg" />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column border border-secondary my-3">
            <img className="" src={post3} alt="image" />
            <img
              className="mx-3 my-3"
              style={{ width: "70px" }}
              src={education}
              alt="image"
            />
            <div className="d-flex justify-content-between align-items-center px-3">
              <h5 className="mt-1">
                Tax Benefits for Investment under National Pension<br></br>{" "}
                Scheme launched by Government
              </h5>
              <img className="mb-3" src={dots} alt="" />
            </div>
            <p className="px-3">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center px-3">
                <img src={man2} alt="man" />
                <h6 className="mx-1">Sarah West</h6>
              </div>
              <div>
                <img src={view1} alt="view" />
                <img className=" mx-3" src={share} alt="shareimg" />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column border border-secondary">
            <img className="" src={post2} alt="image" />
            <img
              className="mx-3 my-3"
              style={{ width: "70px" }}
              src={meetup}
              alt="image"
            />
            <div className="d-flex justify-content-between align-items-center px-3">
              <h5 className="mt-1">
                Finance & Investment Elite Social Mixer @Lujiazui
              </h5>
              <img className="mb-3" src={dots} alt="" />
            </div>
            <img className="w-50 px-3 my-3" src={dates} alt="dates" />
            <button type="button" class="btn btn-outline-danger w-10 mx-3 mb-3">
              Visit Website
            </button>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center px-3">
                <img src={man3} alt="man" />
                <h6 className="mx-1">Ronal Jones</h6>
              </div>
              <div>
                <img src={view1} alt="view" />
                <img className=" mx-3" src={share} alt="shareimg" />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column border border-secondary mt-3">
            <img
              className="mx-3 my-3"
              style={{ width: "70px" }}
              src={job}
              alt="image"
            />
            <div className="d-flex justify-content-between align-items-center px-3">
              <h5 className="mt-1">Software Developer</h5>
              <img className="mb-3" src={dots} alt="" />
            </div>
            <img className="w-50 px-3 my-3" src={date} alt="dates" />
            <button
              type="button"
              class="btn btn-outline-success w-10 mx-3 mb-3"
            >
              Apply on Timesjobs
            </button>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center px-3">
                <img src={man4} alt="man" />
                <h6 className="mx-1">Joseph Gray</h6>
              </div>
              <div>
                <img src={view1} alt="view" />
                <img className=" mx-3" src={share} alt="shareimg" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-none d-md-block mx-3 ">
          <div className="d-flex border-bottom ">
            <img src={locations} alt="location" />
            <input
              style={{ outline: "none" }}
              className="border-0"
              type="text"
              placeholder="|Enter your location"
            />
            <img src={cross} alt="cross-img" />
          </div>
          <small style={{fontSize:'12px'}}
          className="my-5 d-block">! Your location will help us serve better  and extend a personalised experience.</small>
          <p className="my-3">👍 RECOMMENDED GROUPS</p>
          <div >
             <div className="d-flex justify-content-between">
               <div className="d-flex ">
               <img src={f1} alt="people-image" />
               <p className="pt-2 px-3">Leisure</p>
              </div>
              <button className="btn btn-light rounded-pill">Follow</button>
              
             </div>

             <div className="d-flex justify-content-between mt-3">
               <div className="d-flex ">
               <img src={f2} alt="people-image" />
               <p className="pt-2 px-3">Activism</p>
              </div>
              <button className="btn btn-light rounded-pill">Follow</button>
              
             </div>

             <div className="d-flex justify-content-between my-3">
               <div className="d-flex ">
               <img src={f3} alt="people-image" />
               <p className="pt-2 px-3">MBA</p>
              </div>
              <button className="btn btn-light rounded-pill">Follow</button>
              
             </div>

             <div className="d-flex justify-content-between">
               <div className="d-flex ">
               <img src={f4} alt="people-image" />
               <p className="pt-2 px-3">Philosophy</p>
              </div>
              <button className="btn btn-light rounded-pill">Follow</button>
              
             </div>

             
          </div>

        </div>
      </div>
    </div>
  );
};
export default PostSection;
