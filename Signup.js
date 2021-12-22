import React, { useState } from "react";
import signImg from "../images/signup.jpg";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { Context } from "../App";
import {toast ,ToastContainer} from 'react-toastify'

export default function Signup() {
  const history = useHistory();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    proffession: "",
  });

  const handleChange = (e) => {
    let inp_name = e.target.name;
    let value = e.target.value;

    setuserData({
      ...userData,
      [inp_name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phone, password, proffession } = userData;

      const res = await axios.post("/register", {
        name,
        email,
        phone,
        password,
        proffession,
      });

      if (!res) {
        console.log("wrong credentials...");
      } else {
        //toast.success('signed up successfully' ,{position:'top-center'});
       
        history.push("/login");
      }
      console.log(res);
    } catch (error) {
      window.alert("something went wrong ");
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <section className="signup d-flex justify-content-center">
          <div className="container signup-box p-2 px-4 shadow-lg">
            <div className="row my-2">
              <h1 className="signup-tital">Sign Up</h1>
            </div>
            <div className="row signup">
              <div className="col-sm form-box ">
                <div className="form-group mt-5">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i>
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={userData.name}
                    className="input"
                    placeholder="   Name"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="form-group mt-5">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    onChange={handleChange}
                    value={userData.email}
                    className="input"
                    placeholder="   Email"
                    id="email"
                    name="email"
                  />
                </div>

                <div className="form-group mt-5">
                  <label htmlFor="phone">
                    <i className="fas fa-phone"></i>
                  </label>
                  <input
                    type="number"
                    onChange={handleChange}
                    value={userData.phone}
                    className="input"
                    placeholder="    Phone"
                    id="phone"
                    name="phone"
                  />
                </div>

                <div className="form-group mt-5">
                  <label htmlFor="password">
                    <i className="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    value={userData.password}
                    className="input"
                    placeholder="  Password"
                    id="password"
                    name="password"
                  />
                </div>

                <div className="form-group mt-5">
                  <label htmlFor=" proffession">
                    <i class="fas fa-user-tie"></i>
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={userData.proffession}
                    className="input"
                    placeholder="   proffession"
                    id=" proffession"
                    name="proffession"
                  />
                </div>

                <div className="row">
                  <div className=" col-sm-4 form-group-submit mt-3">
                    <button
                      className="btn btn-dark"
                      type="submit"
                      onClick={postData}
                    >
                      sign up
                    </button>
                  </div>
                  <div className="col-sm-7 offset-1 mt-4 ">
                    <NavLink to="/login">? already have an account</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-sm img-box">
                <img src={signImg} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer/>
    </>
  );
}
