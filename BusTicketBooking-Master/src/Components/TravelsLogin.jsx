import React from "react";

const TravelsLogin = () => {
  return (
    <>
      <div class="container">
        <div class="card bg-danger col-lg-6 col-10 col-sm-10 ml-auto mr-auto p-0 pb-2 pr-2 pl-2 m-0">
          <div class="card-header bg-white text-danger m-0">
            <h1 class="login-head">Travels Login</h1>
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
            <div className="form-group p-0 d-flex justify-content-end">
              <button type="submit" className="btn rounded-2 px-3 mr-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TravelsLogin;
