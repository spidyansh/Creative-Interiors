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
        <h1 className="display-4 fw-normal">Our Esteemed Clients <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" 
          color="#f70536" class="bi bi-body-text" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
</svg></h1>
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
