import React, { useEffect, useState } from 'react';
import Card from './Card';
import ml from '../assets/logo-ml.png';
import bscp from '../assets/logo-buscape.png';
import './List.css';

const MAX = 5;

function List() {
  const [page, setPage] = useState(1);
  const [nextVisible, setNextVisible] = useState(true);
  const [prevVisible, setPrevVisible] = useState(false);

  const handleClick = ({ target: { name } }) => {
    name === 'next' ? setPage(page + 1) : setPage(page - 1);
  };

  useEffect(() => {
    if (page >= MAX) {
      setNextVisible(false);
    } else {
      setNextVisible(true);
    }
    if (page <= 1) {
      setPrevVisible(false);
    } else {
      setPrevVisible(true);
    }
    if (page > 5) setPage(5);
    if (page < 1) setPage(1);
  }, [page]);

  return (
    <section className='section-container'>
      <ul className='list-container'>
        <Card logo={ml} />
        <Card logo={bscp} />
        <Card logo={bscp} />
        <Card logo={ml} />
        <Card logo={ml} />
        <Card logo={bscp} />
        <Card logo={bscp} />
        <Card logo={ml} />
        <Card logo={ml} />
        <Card logo={bscp} />
        <Card logo={bscp} />
        <Card logo={ml} />
        <Card logo={ml} />
        <Card logo={bscp} />
        <Card logo={bscp} />
        <Card logo={ml} />
        <Card logo={ml} />
        <Card logo={bscp} />
      </ul>
      <div className='pagination'>
        <button
          onClick={handleClick}
          name='prev'
          disabled={!prevVisible}
          type='button'
        >{`<-- Previous page: ${page > 1 ? page - 1 : ''}`}</button>

        <button
          onClick={handleClick}
          disabled={!nextVisible}
          name='next'
          type='button'
        >{` Next Page: ${page + 1 <= MAX ? page + 1 : ''} -->`}</button>
      </div>
    </section>
  );
}

export default List;
