import React from 'react'
import officeinterior from "../Images/officeinterior.jpg";
import residentialinterior from "../Images/residentialinterior.jpg";
import modularkitchen from "../Images/modularkitchen.jpg";
import spaceinterior from "../Images/spaceinterior.jpg";

export default function Category() {
  return (
    <>
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    <div className="col-md-5 p-lg-5 mx-auto my-3">
      <h1 className="display-4 fw-normal">What we offer</h1>
      <p className="lead fw-normal">
      We specialize in interior fit-out work for retail, commercial and residential spaces through modern interior design techniques and turn-key execution.
      </p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block" />
    <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
  </div>
  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Showroom & Office Interior</h2>
        <p className="lead">We specialize in designing custom showroom and office spaces that are tailored to the specific needs and preferences of our clients. Our team of experienced designers works closely with each client to create functional, stylish, and efficient spaces that meet their unique requirements.</p>
      </div>
      <img src={officeinterior} className="img-fluid" alt="..." style={{ width: "80%", height: 350, borderRadius: "21px 21px 0 0" }}></img>
    </div>
    <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Residential Interior</h2>
        <p className="lead">Our residential designs are made with high-quality materials and finishes, ensuring that they are durable, easy to maintain, and built to last. We also take care to ensure that our designs are practical and easy to use, incorporating features like storage solutions, energy-efficient appliances, and smart home technologies to make daily life easier and more enjoyable.</p>
      </div>
      <img src={residentialinterior} className="img-fluid" alt="..." style={{ width: "80%", height: 350, borderRadius: "21px 21px 0 0" }}></img>
    </div>
  </div>
  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Modular Kitchen</h2>
        <p className="lead">At our modular kitchen design business, we pride ourselves on our attention to detail and our commitment to customer satisfaction. From the initial consultation to the final installation, we work closely with our clients to ensure that their dream kitchen becomes a reality.</p>
      </div>
      <img src={modularkitchen} className="img-fluid" alt="..." style={{ width: "80%", height: 350, borderRadius: "21px 21px 0 0" }}></img>
    </div>
    <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Space Saving Furniture</h2>
        <p className="lead">Space-saving furniture is designed to be compact and take up as little space as possible. It is well suited for small apartments, homes and offices where space is at a premium. This kind of furniture which includes murphy beds, fold-down tables and convertible sofas can be easily stowed away when not in use and can help maximize the use of the available space in a room. Ready to get creative with your space?</p>
      </div>
      <img src={spaceinterior} className="img-fluid" alt="..." style={{ width: "80%", height: 350, borderRadius: "21px 21px 0 0" }}></img>
    </div>
  </div>
</>
  )
}
