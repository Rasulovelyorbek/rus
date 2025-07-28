import React from "react";
import "./Logos.css";

const Logos = () => {
  return (
    <div className="logos">
      <div className="container">
        <div className="row align-items-center justify-content-sm-between justify-content-center  ">
          <div className="col-md-1 col-sm-3 col-6">
            <img className="img-fluid" src="./img/foton.png" alt="" />
          </div>
          <div className="col-md-1 col-sm-3 col-6">
            <img className="img-fluid" src="./img/yaz.png" alt="" />
          </div>
          <div className="col-md-1 col-sm-3 col-6">
            <img className="img-fluid" src="./img/zil.png" alt="" />
          </div>
          <div className="col-md-1 col-sm-3 col-6">
            <img className="img-fluid" src="./img/gaz.png" alt="" />
          </div>
          <div className="col-md-1 d-md-flex d-none">
            <img className="img-fluid" src="./img/isuzu.png" alt="" />
          </div>
          <div className="col-1 d-md-flex d-none">
            <img className="img-fluid" src="./img/mind.png" alt="" />
          </div>
          <div className="col-1 d-md-flex d-none">
            <img className="img-fluid" src="./img/zil.png" alt="" />
          </div>
          <div className="col-1 d-md-flex d-none">
            <img className="img-fluid" src="./img/yaz.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
