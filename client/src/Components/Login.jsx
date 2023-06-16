import React, { useState} from "react";
import {  Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../assets/css/register.css";
import Loader from "./Loader";
import store from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../state/action";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let [loading, setLoading] = useState(false);


  const setValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setState((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };



  const submitForm = async (event) => {
    event.preventDefault()
    dispatch(login(state));
    store.subscribe(async () => {
      const data = await store.getState().user;
      if (!data?.token) {
        setsuccess("false")
        seterror(data?.message);
      }
      else {
        localStorage.setItem("profile", JSON.stringify(data));
        navigate("/dashboard");
      }
    })
  }


  return (
    <>
      <Navbar />
      <div className="container-fluid animate__animated animate__backInLeft">
        <div className="row register-box">
          <div className="col-lg-12 col-sm-12 mt-1 pt-5">
            {loading ? <Loader /> 
            :
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
                    <h2>Admin Login</h2>
                  </div>
                  <div className="row clearfix">
                    <div className="">
                      <form>
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
                          value="Login"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            }
            <p className="credit">
              Not registered{" "}
              <Link to="/register">
                Sign-up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
