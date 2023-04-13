import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <li className='card-container'>
      <img src='#' alt='Product image' />
      <article className='text-container'>
        <h2>Title tuffy</h2>
        <p>Description Tuff</p>
        <p>Price</p>
      </article>
      <div className='btn-container'>
        <button type='button'>Go Site</button>
        <img src={props.logo} alt='logo store' className='logo' />
      </div>
    </li>
  );
}

export default Card;
