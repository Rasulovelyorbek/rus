import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="mt-3">
      <div className="container">
        <div className="navbar">
          <ul className="nav ">
            <button className="bg-warning btn">
              <i class="fa-solid fa-bars"></i> Каталог
            </button>
            <li className="nav-item d-md-flex d-noned-md-flex d-none">
              <a href="" className="nav-link text-black">
                Медиа
              </a>
            </li>
            <li className="nav-item d-md-flex d-none">
              <a href="" className="nav-link text-black">
                Сервис
              </a>
            </li>
            <li className="nav-item d-md-flex d-none">
              <a href="" className="nav-link text-black">
                О нас
              </a>
            </li>
            <li className="nav-item d-md-flex d-none">
              <a href="" className="nav-link text-black">
                Новости
              </a>
            </li>
            <li className="nav-item d-md-flex d-none">
              <a href="" className="nav-link text-black">
                Контакты
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-around">
            <div className="serch d-sm-flex d-none">
              <input type="text" className="inpt rounded-5 " placeholder="" />
              <i class="fa-solid fa-magnifying-glass fs-5 p-2"></i>
            </div>
            <i className="fa-solid fa-cart-shopping fs-4"></i>
            <i className="fa-solid fa-heart fs-4"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
