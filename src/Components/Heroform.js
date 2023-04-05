import React from "react";
import Portfolio from "./Portfolio";
import Category from "./Category";

export default function Heroform() {
  return (
    <>
      <div className="mainform">
        <form className="form ">
          <div
            className="container d-md-flex flex-md-equal"
            style={{ color: "white", paddingBottom: "20px" }}
          ></div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              min="10"
              max="10"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contact Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Description"
            />
          </div>
          <br></br>
          <button
            type="submit"
            className="btn btn-primary btn-connect-interior"
            style={{ width: "100%" }}
          >
            BOOK FREE DESIGN SESSION
          </button>
        </form>
      </div>
    </>
  );
}
