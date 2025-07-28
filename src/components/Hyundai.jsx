import React from "react";
import Card2 from "./Card2";

const Hyundai = () => {
  return (
    <div className="hundai">
      <div className="container">
        <div className="row gy-5 ">
          <div className="col-md-3 col-sm-6 col-12">
            <Card2 />
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <Card2 />
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <Card2 />
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hyundai;
