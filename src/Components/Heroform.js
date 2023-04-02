import React from 'react'

export default function Heroform() {
  return (
    <>
    <form className='form'>
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
  <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    
  >Choose a service
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Another action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </li>
  </ul>
</div>

  <button type="submit" className="btn btn-primary">
    Get Free Quote
  </button>
</form>

    </>
  )
}
