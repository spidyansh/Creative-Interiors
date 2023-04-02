import React from "react";

export default function Clientlogo(props) {
  return (
    <>
      <div className="my-3 mx-2" style={{ width: "10rem" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          height={80}
        />
      </div>
    </>
  );
}
