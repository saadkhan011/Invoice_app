import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/register.css";
import Navbar from "./Navbar";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { register } from "../state/action";
import store from "../store";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");
  let [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  })

  const setValues = (event) => {
    event.preventDefault();
    const name = event?.target?.name;
    const value = event?.target?.value;
    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  const submitForm = async (event) => {
    event.preventDefault();
    dispatch(register(state));
    store.subscribe(async () => {
      const data = await store.getState().user;
      if (!data?.token) {
        setsuccess("false")
        seterror(data?.message);
      }
      else {
        localStorage.setItem("profile", JSON.stringify(data));
        navigate("/dashboard")
      }
    })
  }

  return (
    <>

      <Navbar />
      <div className="container-fluid animate__animated animate__backInRight">
        <div className="row register-box">
          {/* <div className="col-lg-6 col-sm-12 bg">
          </div> */}
          <div className="col-lg-12 col-sm-12 mt-3">
            {loading ? <Loader /> :
              <div className="form_wrapper">
                <div className="form_container">
                  {success === "true" ? (
                    <>
                      <div className="alert alert-primary" role="alert">
                        You have successfully registered a user
                      </div>
                    </>
                  ) : null}
                  {success === "false" ? (
                    <>
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    </>
                  ) : null}
                  <div className="title_container">
                    <h2>Registration</h2>
                  </div>
                  <div className="row clearfix">
                    <div className="">
                      <form encType="multipart/form-data" method="POST">
                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              {" "}
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input
                                type="text"
                                onChange={setValues}
                                value={state.name}
                                name="name"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col_half">
                            <div className="input_field">
                              {" "}
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input
                                onChange={setValues}
                                value={state.lastname}
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input_field">
                          {" "}
                          <span>
                            <i aria-hidden="true" className="fa fa-envelope"></i>
                          </span>
                          <input
                            onChange={setValues}
                            value={state.email}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="input_field">
                          {" "}
                          <span>
                            <i aria-hidden="true" className="fa fa-lock"></i>
                          </span>
                          <input
                            onChange={setValues}
                            value={state.password}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <input
                          onClick={submitForm}
                          className="button"
                          type="submit"
                          value="Register"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            }
            <p className="credit">
              Already registered{" "}
              <Link to="/login">
                Sign-in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
