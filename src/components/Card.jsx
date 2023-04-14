import React from 'react';
import './Card.css';

function Card(props) {
  const cropText = (str) => {
    const [p1, p2, p3, p4] = str.split(' ');
    return [p1, p2, p3, p4].join(' ');
  };

  const cropDescription = (str) => {
    if (str.length < 100) return str;
    return str
      .split(' ')
      .map((p, i) => (i < 15 ? p : ''))
      .join(' ');
  };
  return (
    <li className='card-container'>
      <img src={props?.srcImg} alt={props?.altImg} />
      <article className='text-container'>
        <h2>{cropText(props?.altImg?.replace('Imagem de ', ''))}</h2>
        <p className='description'>{cropDescription(props?.desc)}</p>
        <p className='price'>
          {props?.price?.toFixed(2)}
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
