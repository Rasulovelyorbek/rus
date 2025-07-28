import React from "react";
import "./Zvonok.css";

const Zvonok = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide container">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner d-flex align-items-center">
        <div class="carousel-item active">
          <img src="./img/header_bg.png" alt="" />
          <div class="carousel-caption karusel">
            <h5 className="d-sm-flex d-none">Завод-производитель автоспецтехники</h5>
            <p className="d-sm-flex d-none">
              ООО «РусТрак» — это компания, занимающаяся производством и
              поставкой специализированной техники и спецтранспорта.
            </p>
            <button className="btn btn-warning d-sm-flex d-none ">Открыть каталог</button>
            <button className="btn btn-warning d-sm-flex d-none ">Заказать звонок</button>
          </div>
        </div>
        <div class="carousel-item ">
          <img src="./img/header_bg.png" alt="" />
          <div class="carousel-caption karusel">
            <h5 className="d-sm-flex d-none">Завод-производитель автоспецтехники</h5>
            <p className="d-sm-flex d-none">
              ООО «РусТрак» — это компания, занимающаяся производством и
              поставкой специализированной техники и спецтранспорта.
            </p>
            <button className="btn btn-warning d-sm-flex d-none ">Открыть каталог</button>
            <button className="btn btn-warning d-sm-flex d-none ">Заказать звонок</button>
          </div>
        </div>
        <div class="carousel-item ">
          <img src="./img/header_bg.png" alt="" />
          <div class="carousel-caption karusel">
            <h5 className="d-sm-flex d-none">Завод-производитель автоспецтехники</h5>
            <p className="d-sm-flex d-none">
              ООО «РусТрак» — это компания, занимающаяся производством и
              поставкой специализированной техники и спецтранспорта.
            </p>
           <div>
             <button className="btn btn-warning d-sm-flex d-none ">Открыть каталог</button>
             <button className="btn btn-warning d-sm-flex d-none ">Заказать звонок</button>
           </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Zvonok;
