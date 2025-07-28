import React from "react";
import "./Kamaz.css";

const Kamaz = () => {
  return (
    <div className="katta-furgon">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <img className="img-fluid" src="./img/kamaz.png" alt="" />
          </div>
          <div className="col-lg-3 col-12 d-flex flex-column justify-content-center gap-5 align-items-start">
            <p className="text-dark ps-0">
              Собственное производство <br />
              полного цикла
            </p>
            <p className="text-md-secondary ">Конструкторское бюро</p>
            <p className="text-md-secondary ">
              Прямое партнерство <br />с дистрибьютерами
            </p>
            <p className="text-md-secondary ">
              Постоянное улучшение <br /> технологии
            </p>
            <p className="text-md-secondary ps-0">Сертификация ISO 9001</p>
          </div>
          <div className="col-4 align-items-center d-lg-flex d-none">
            <img className="img-fluid" src="./img/line.png" alt="" />
            <div className="ps-4 d-flex flex-column align-items-start justify-content-center">
              <img className="img-fluid py-4" src="./img/settings.png" alt="" />
              <p className="">
                Производство располагается в цехах площадью более <br />
                700 квадратных метров. Производство укомплектовано <br />
                современным оборудованием: Плазменная резка, <br />
                окрасочная камера, дробеструиная камера, сварочные <br />
                полуавтоматы, листогибочные станки, станок <br />
                ленточнопильныи и др.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kamaz;
