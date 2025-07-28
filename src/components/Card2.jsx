import React from "react";
import "./Hyundai.css";

const Card2 = () => {
  return (
    <div className="hyundai">
      <div className="d-flex justify-content-between">
        <span className="nacli">В наличии</span>
        <i class="fa-regular fa-heart"></i>
      </div>
      <img className="img-fluid" src="./img/hyundai.png" alt="" />
      <p className="fw-medium">HYUNDAI HD 78 c промтоварным фургоном</p>
      <span className="fw-bold">от 352 000₽</span>
      <div>
        <button className="btn btn-warning py-2 px-4">Подробнее</button>
        <button className="btn">
          Получить КП <i class="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default Card2;
