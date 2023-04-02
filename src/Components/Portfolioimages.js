import React from "react";

export default function Portfolioimages(props) {
  return (
    <>
      <div className="my-3 mx-2" style={{ width: "28rem" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
