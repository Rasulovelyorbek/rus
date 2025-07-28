import React from "react";
import "./Kategori.css";
import Card from "./Card";

const Kategori = () => {
  return (
    <div className="kategori">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3 col-sm-6 col-12 justify-content-center align-items-center">
            <Card />
          </div>
          <div className="col-lg-3 col-sm-6 col-12 justify-content-center align-items-center">
            <Card />
          </div>
          <div className="col-lg-3 col-sm-6 col-12 justify-content-center align-items-center">
            <Card />
          </div>
          <div className="col-lg-3 col-sm-6 col-12 justify-content-center align-items-center">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
