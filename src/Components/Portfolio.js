import React from "react";
import Portfolioimages from "./Portfolioimages";
import p1 from "../Images/p1.jpg";
import p2 from "../Images/p2.jpg";
import p3 from "../Images/p3.jpg";
import p4 from "../Images/p4.jpg";
import p5 from "../Images/p5.jpg";
import p6 from "../Images/p6.jpg";
import p7 from "../Images/p7.jpg";
import p8 from "../Images/p8.jpg";
import p9 from "../Images/p9.jpg";

export default function Portfolio(props) {
  return (
    <>
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal">Our Gallery <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
          color="#f70536" class="bi bi-body-text" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
</svg></h1>
      </div>
      <div className="portfoliomain row row-cols-3 mx-5">
        <Portfolioimages img={p1} />
        <Portfolioimages img={p2} />
        <Portfolioimages img={p3} />
        <Portfolioimages img={p4} />
        <Portfolioimages img={p5} />
        <Portfolioimages img={p6} />
        <Portfolioimages img={p7} />
        <Portfolioimages img={p8} />
        <Portfolioimages img={p9} />
      </div>
    </>
  );
}
