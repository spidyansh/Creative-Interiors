import React from "react";
import Heroform from "./Heroform";

export default function Quote() {
  return (
    <>
      <div className="quote">
        <form className="form quoteform ">
          <div
            className="container d-md-flex flex-md-equal"
            style={{ color: "white", paddingBottom: "20px" }}
          >
            <h2>
              Connect to city's best Interior Designers to get your area
              personalized
            </h2>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Name" required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email" required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contact Number" required
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
            Get Free Quote
          </button>
        </form>
      </div>
    </>
  );
}
