import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="container">
        <div class="card bg-danger col-md-4 ml-auto mr-auto p-0 pb-2 pr-2 pl-2 m-0">
          <div class="card-header bg-white text-danger m-0">
            <h1 class="login-head">Customer Login</h1>
          </div>
          <div class="card-body"></div>

          <form action="">
            <div class="form-group">
              <label class="text-white" for="email">
                Email :
              </label>
              <input
                type="email"
                class="form-control form-input"
                placeholder="Enter email"
                id="email"
              />
            </div>
            <div class="form-group">
              <label class="text-white" for="pwd">
                Password :
              </label>
              <input
                type="password"
                class="form-control form-input"
                placeholder="Enter password"
                id="pwd"
              />
            </div>
            <button type="submit" class="btn">
              Login
            </button>
          </form>
          <div class="text-white">
            Don't have an account{" "}
            <Link to={"/registration"} class="forma">
              Create Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
