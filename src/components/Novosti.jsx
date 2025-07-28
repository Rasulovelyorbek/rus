import React from "react";
import "./Novosti.css";
import Card3 from "./Card3";

const Novosti = () => {
  return (
    <div className="">
      <div className="container">
        <h1>Новости</h1>

        <div className="row gy-4 align-items-center justify-content-center">
          <div className="col-md-3 col-sm-6 col-8">
            <Card3 />
          </div>
          <div className="col-md-3 col-sm-6 col-8">
            <Card3 />
          </div>
          <div className="col-md-3 col-sm-6 col-8">
            <Card3 />
          </div>
          <div className="col-md-3 col-sm-6 col-8">
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novosti;
