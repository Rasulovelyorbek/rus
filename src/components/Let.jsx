import React from "react";
import "./Let.css";

const Let = () => {
  return (
    <div className="let bg-warning">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 col-10 d-flex flex-column align-items-start">
            <h1 className="textt">
              5 <br /> <span className="texee">лет</span>
            </h1>
            <p>
              За 5 лет своей деятельности ООО «РусТрак» превратилось в крупное
              предприятие по производству и продаже специальной техники
            </p>
          </div>
          <div className="col-md-3 col-10 d-flex flex-column align-items-start">
            <h1 className="textt">
              95 <br /> <span className="texee">субъектов</span>
            </h1>
            <p>
              ЗООО «РусТрак» дорожит доверием автопрома, которое подтверждено
              дилерскими полномочиями от 10 лидирующих концернов
            </p>
          </div>
          <div className="col-md-3 col-10 d-flex flex-column align-items-start">
            <h1 className="textt">
              10 <br /> <span className="texee">концернов</span>
            </h1>
            <p>
              Мы обеспечили 95 субъектов РФ надежной техникой коммерческого и
              специализированного предназначения
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Let;
