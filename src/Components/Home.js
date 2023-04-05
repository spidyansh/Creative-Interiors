import React from "react";
import interior1 from "../Images/interior1.jpg";
import interior2 from "../Images/interior2.jpg";
import interior3 from "../Images/interior3.jpg";
import interior4 from "../Images/interior4.jpg";
import Heroform from "./Heroform";

export default function Home() {
  return (
    <>
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={interior1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={interior2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={interior3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={interior4} className="d-block w-100" alt="..." />
            
          </div>
        </div>
        <Heroform/>
      </div> */}
      <div className="home">
        <div className="herocontent">
          <h2 className="heroheading">Dream homes begin with dream designs</h2>{" "}
          <br />
          <h5 style={{ textAlign: "center" }}>
            Affordable prices | Easy EMI | Unique Designs
          </h5>
        </div>
        <Heroform />
      </div>
    </>
  );
}
