import React from "react";
import "./Kompani.css";

const Kompani = () => {
  return (
    <div className="kompani">
      <div className="container">
        <div className="row align-content-center justify-content-center">
          <div className="col-md-6 col-12  align-items-md-start align-items-center justify-content-center d-flex flex-column ">
            <h1>
              О компании <span className="text-warning">Рустрак</span>
            </h1>
            <p>
              Наша компания не случайно занимает лидирующие позиции на рынке
              спецтехники: каждый день мы вносим свой вклад в развитие
              отечественного автопрома и укрепление российской экономики. <br />
              <br /> Наша компания снискала признание среди крупнейших
              отечественных корпораций и государственных структур, став
              поставщиком спецтехники для таких гигантов, как Газпром, Росатом,
              Россети, РСК «МИГ» и других.
            </p>
            <button className="btn btn-warning rounded-2 px-4">
              Подробнее<i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-md-6 col-12   align-items-start justify-content-center d-flex flex-column  ">
            <img className="img-fluid" src="./img/Kompani.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kompani;
