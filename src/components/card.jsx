import React from 'react';
import './Card.css';

function Card(props) {
  const cropText = (str) => {
    const [p1, p2, p3, p4] = str.split(' ');
    return [p1, p2, p3, p4].join(' ');
  };
  return (
    <li className='card-container'>
      <img src={props?.srcImg} alt={props?.altImg} />
      <article className='text-container'>
        <h2>{cropText(props?.altImg?.replace('Imagem de ', ''))}</h2>
        <p>{props?.desc}</p>
        <p>
          {props?.price}
          <span>R$</span>
        </p>
      </article>
      <div className='btn-container'>
        <button type='button' onClick={() => parent.open(props?.link)}>
          Go Site
        </button>
        <img src={props.logo} alt='logo store' className='logo' />
      </div>
    </li>
  );
}

export default Card;
