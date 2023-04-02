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
        <h1 className="display-4 fw-normal">Our Portfolio</h1>
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
