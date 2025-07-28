import React from 'react'
import "./Novosti.css"

const Card3 = () => {
  return (
    <div className='novosti'>
      <img className='img-fluid' src="./img/trucks.png" alt="" />
      <span>15.06.2021</span>
      <h6>КАМАЗ готовит конкурента ГАЗели и Валдая (первые ФОТО)</h6>
      <button className='btn'>Подробнее <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default Card3
