import React from "react";
import SearchBusBox from "../Containers/SearchBusBox";

const SearchBus = () => {
  return (
    <>
      <div class="container">
        <div class="card bg-danger ml-auto mr-auto p-2 m-0">
          <form action="">
            <div class="row">
              <div class="form-group col-md-4">
                <label class="text-white" for="form">
                  From :
                </label>
                <input
                  type="text"
                  class="form-control form-input"
                  placeholder=" From"
                  id="form"
                />
              </div>
              <div class="form-group col-md-4">
                <label class="text-white" for="to">
                  To :
                </label>
                <input
                  type="to"
                  class="form-control form-input"
                  placeholder=" To"
                  id="to"
                />
              </div>
              <div class="form-group col-md-3">
                <label class="text-white" for="date">
                  Date :
                </label>
                <input
                  type="date"
                  class="form-control form-input"
                  placeholder=" To"
                  id="to"
                />
              </div>
              <div class="form-group col-md-1 mt-4 ml-auto">
                <button type="submit" class="btn">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="mt-2">
          <div class="row mt-2">
            <div class="col-4">
              <SearchBusBox />
            </div>
            <div class="col-4">
              <SearchBusBox />
            </div>
            <div class="col-4">
              <SearchBusBox />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-4">
              <SearchBusBox />
            </div>
            <div class="col-4">
              <SearchBusBox />
            </div>
            <div class="col-4">
              <SearchBusBox />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-4">
              <SearchBusBox />
            </div>
            <div class="col-4">
              <SearchBusBox />
            </div>
            <div class="col-4">
              <SearchBusBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBus;
