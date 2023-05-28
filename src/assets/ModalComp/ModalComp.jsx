import React from 'react';
import { useForm } from 'react-hook-form';
import './ModalComp.css';
import data from './img/calendar.png';
import tipodetransporte from './img/car.png';
import destination from './img/portfolio.png';
import money from './img/money.png';

const ModalComp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='ModalComp'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='title'>
          <h1>Novo Relatorio</h1>
          <div className='line' />
        </div>
        <div className='container'>
          <h3>
          <div className="photo-container">
          <img src={data} alt='' className='pic' />
          </div>
            Data
          </h3>
          <input type='number' maxLength={8} {...register('Data', { required: true })} />
        </div>
        <div className='container'>
          <h3>
          <div className="photo-container">
          <img src={tipodetransporte} alt='' className='pic' />
          </div>
            Tipo de transporte
          </h3>
          <input {...register('Tipo', { required: true })} />
        </div>
        <div className='container'>
          <h3>
          <div className="photo-container">
          <img src={destination} alt='' className='pic' />
          </div>
            Destino
          </h3>
          <input {...register('Destino', { required: true })} />
        </div>
        <div className='container'>
          <h3>
          <div className="photo-container">
          <img src={money} alt='' className='pic' />
          </div>
            Valor
          </h3>
          <input {...register('Valor', { required: true })} />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <h3></h3>
        <input type='submit' id='submit' />
      </form>
    </div>
  );
};

export default ModalComp;
