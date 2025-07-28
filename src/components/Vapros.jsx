import React from 'react'

const Vapros = () => {
  return (
    <div className='bg-body-secondary'>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-12">
            <h1>ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <h5 className='mt-3'>Оставьте свои контактные данные, и мы презвоним вам в ближайшее время</h5>
            <div className="d-md-flex flex-column align-items-start gap-3 mt-5">
              <div  className='d-flex flex-column '>
                <p className='m-0'>Имя</p>
                <input type="text" placeholder='Иван Иванов' className='px-5' />
              </div>
              <div className='d-flex flex-column '>
                <p className='m-0'>Телефон</p>
                <input type="number" placeholder="+998"  className='px-5' />
              </div>

              <button className='btn btn-warning'>Открыть каталог</button>
            </div>
            <p className='text-secondary mt-4'>Нажимая на кнопку отп равить Вы соглашаетесь на обработку Ваших персональных данных компание ООО</p>
          </div>
          <div className="col-4 d-md-flex d-none">
            <img className='img-fluid' src="./img/truck.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vapros
