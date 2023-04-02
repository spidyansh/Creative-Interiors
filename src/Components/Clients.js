import React from 'react'
import Clientlogo from './Clientlogo'
import l1 from "../Images/l1.png";
import l2 from "../Images/l2.png";
import l3 from "../Images/l3.png";
import l4 from "../Images/l4.png";
import l5 from "../Images/l5.png";
import l6 from "../Images/l6.png";
import l7 from "../Images/l7.png";
import l8 from "../Images/l8.png";


export default function Clients() {
  return (
    <>
    <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal">Our Esteemed Clients</h1>
      </div>
      <div className="portfoliomain row row-cols-2 mx-5">
        <Clientlogo img={l1} />
        <Clientlogo img={l2} />
        <Clientlogo img={l3} />
        <Clientlogo img={l4} />
        <Clientlogo img={l5} />
        <Clientlogo img={l6} />
        <Clientlogo img={l7} />
        <Clientlogo img={l8} />
      </div>
    </>
  )
}
