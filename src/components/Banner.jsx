import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 col-4 d-flex align-items-center ">
            <img className="img-fluid" src="./img/logo.png" alt="" />
            <h6 className="px-4 d-sm-flex d-none">
              производство и продажа автоспецтехники
            </h6>
          </div>
          <div className="col-md-6 col-4 align-items-center d-flex justify-content-between">
            <div>
              <p className="m-0 fw-bold d-md-flex d-none">Время работы</p>
              <span className=" d-sm-flex d-none ">г. Нижний Новгород ул. Торфяная, 35</span>
            </div>

            <div className="px-4  d-md-flex d-none">
              <p className="m-0 d-md-flex d-none">Для регионов: 8 (800) 77-77-210</p>
              <p className="m-0">Нижний Новгород: 8 (831) 225-00-55</p>
            </div>
            <i className="fa-solid fa-phone bg-warning p-2 rounded-5"></i>
          </div>
        </div>
      </div>
      <hr />  
    </div>
  );
};

export default Banner;
