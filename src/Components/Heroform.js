import React from 'react'

export default function Heroform() {
  return (
    <>
    
    <div className='mainform'>
    <form className='form '>
    <div className="container d-md-flex flex-md-equal" style={{color
    :"white",paddingBottom:"20px"}}>
          <h2>Connect to city's best Interior Designers to get your area personalized</h2>
        </div>
    <div className="mb-3">
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder='Your Name'
    />
  </div>
  <div className="mb-3">
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder='Email Address'
    />
  </div>
  <div className="mb-3">
    <input
      type="number"
      className="form-control"
      id="exampleInputPassword1"
      placeholder='Contact Number'
    />
  </div>
  <div className="mb-3">
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder='Category'
    />
  </div>
<br></br>
  <button type="submit" className="btn btn-primary" style={{width:"100%",backgroundColor:"green"}}>
    Get Free Quote
  </button>
</form>
</div>

    </>
  )
}
