import React from "react";
import contactgirl from "../Images/contactgirl.png";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal">Contact us</h1>
      </div>
      <div className="container">
        <div className=" bg-body-tertiary rounded-3">
          <div className="container-fluid">
            <p className="col-md-8 fs-4">
              If you have questions about prices and service details, please
              contact us at:
            </p>
            <h1 class="display-5 fw-bold">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>{" "} */}
              1800 20 444
            </h1>
            <Link to="/quote">
              <a class="btn btn-connect-interior">
                CONNECT TO INTERIOR DESIGNER{" "}
              </a>
            </Link>
            {/* <img src={contactgirl} classname="card-img-top" alt="..." height={250} width={330}  /> */}
          </div>
        </div>
      </div>
    </>
  );
}
