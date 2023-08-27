import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import HomeBanner from "./HomeBanner";
import PostSection from "./PostSection";
import facebook from './assets/img/facebook.png'
import google from './assets/img/google.png'
import img from './assets/img/img.png'
const App = () => {
  const [modal, setModal] = useState(false);
  const [signups, setSignUp] = useState(false);

  return (
    <div className="position-relative">
      <div
        style={{ marginBottom: "60px" }}
        className="d-none d-md-block border-bottom  "
      >
        <Header setModal={setModal} />
      </div>
      {modal && !signups && (
     <div>
      
        <div style={{ maxWidth: "880px", left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',top: '20%',
     zIndex: '1000', backgroundColor:'#ffffff'}} className=" 
        position-absolute p-2 ">
          <div className="w-100 d-flex justify-content-end bg-white"
          onClick={()=>{
            setModal(false)
            setSignUp(false)
            console.log(signups)
          }}>
          <i style={{fontSize:'24px',cursor:'pointer'}} className="fa-regular fa-circle-xmark"></i>
          </div>
          <p style={{backgroundColor:'#effff4',color:'green'}} className="d-none d-md-block rounded p-3  text-center fw-bold bg-opacity-10">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="d-flex justify-content-between ">
          <div>
          <h3 className="fw-bold">Create Account</h3>
          <div className="bg-body-secondary border border-dark-subtle ">
          <div className="d-flex ">
          <input
          style={{outline:'none'}}
                className="py-2 ps-3 w-50 bg-transparent border border-secondary  "
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
              <input
              style={{outline:'none'}}
                className="py-2 ps-3 w-50 bg-transparent    border border-secondary"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
          </div>
          <input
          style={{outline:'none'}}
              className="py-2 ps-3 w-100 bg-transparent   border border-secondary"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />

            <input
            style={{outline:'none'}}
              className="py-2 ps-3 w-100 bg-transparent  border border-secondary"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />

          <input
              className="py-2 ps-3 w-100 bg-transparent  border border-secondary"
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
            />
            </div>

            <div className="d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn btn-primary rounded-pill  w-75 my-3 py-2"
            >
              Create Account
            </button>

            <a onClick={()=>{
              setSignUp(true)
              setModal(false)
            }} className="d-block d-md-none" href="">or, Sign In</a>
          </div>

          <button className="bg-white border border-subtle py-2 w-100">
            <img src={facebook} alt="facebook-image" /> Sign up with Facebook
          </button>
          <button className="bg-white border border-subtle py-2 w-100 mt-2">
            <img src={google} alt="google-image" /> Sign up with Google
          </button>
          </div>

          <div className=" d-none d-md-block">
          <p className="text-sm-end" onClick={()=>{
              setSignUp(true)
              setModal(false)}}>
            Already have an account?
            <span className="text-primary">Sign In</span>
          </p>
          <img src={img} alt="login-image" />
          <p className="text-secondary">
            <small
              >By signing up, you agree to our Terms & conditions, Privacy
              policy</small
            >
          </p>
        </div>

          </div>
        </div>
        </div>
      )}
      {
        signups && (
<div style={{maxWidth:"880px"}} className="mx-auto">
          <div style={{ maxWidth: "880px", backgroundColor:'#ffffff',left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',top: '20%', zIndex: '1000'}} className=" 
        position-absolute p-2 ">
          <div className="w-100 d-flex justify-content-end bg-white"
          onClick={()=>{
            setModal(false)
            setSignUp(false)
            console.log(signups)
          }}>
          <i style={{fontSize:'24px',cursor:'pointer'}} className="fa-regular fa-circle-xmark"></i>
          </div>
          <p style={{backgroundColor:'#effff4',color:'green'}} className="d-none d-md-block rounded p-3  text-center fw-bold bg-opacity-10">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="d-flex justify-content-between ">
          <div>
          <h3 className="fw-bold">Sign In</h3>
          <div className="bg-body-secondary border border-dark-subtle ">
          {/* <div className="d-flex ">
          <input
          style={{outline:'none'}}
                className="py-2 ps-3 w-50 bg-transparent border border-secondary  "
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
              <input
              style={{outline:'none'}}
                className="py-2 ps-3 w-50 bg-transparent    border border-secondary"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
          </div> */}
          <input
          style={{outline:'none'}}
              className="py-2 ps-3 w-100 bg-transparent   border border-secondary"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />

            <input
            style={{outline:'none'}}
              className="py-2 ps-3 w-100 bg-transparent  border border-secondary"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />

          {/* <input
              className="py-2 ps-3 w-100 bg-transparent  border border-secondary"
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
            /> */}
            </div>

            <div className="d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn btn-primary rounded-pill  w-sm-50 w-md-100 my-3 py-2"
            >
              Create Account
            </button>

            <a onClick={()=>{
              setSignUp(true)
              setModal(false)
            }} className="d-block d-md-none" href="">or, Sign Up</a>
          </div>

          <button className="bg-white border border-subtle py-2 w-100">
            <img src={facebook} alt="facebook-image" /> Sign up with Facebook
          </button>
          <button className="bg-white border border-subtle py-2 w-100 mt-2">
            <img src={google} alt="google-image" /> Sign up with Google
          </button>
          <button className="bg-white border text-center border-subtle py-2 w-100 mt-2">
             Forgot password
          </button>
          </div>

          <div className=" d-none d-md-block">
          <p className="text-sm-end" onClick={()=>{
              setSignUp(true)
              setModal(false)}}>
            Already have an account?
            <span className="text-primary">Sign In</span>
          </p>
          <img src={img} alt="login-image" />
          <p className="text-secondary">
            <small
              >By signing up, you agree to our Terms & conditions, Privacy
              policy</small
            >
          </p>
        </div>

          </div>
        </div>
        </div>
        )
      }

      <HomeBanner setModal={setModal}/>
      <PostSection />
    </div>
  );
};

export default App;
