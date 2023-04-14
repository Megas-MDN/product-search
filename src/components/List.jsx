import React, { useEffect, useState } from 'react';
import Card from './Card';
import ml from '../assets/logo-ml.png';
import bscp from '../assets/logo-buscape.png';
import './List.css';

const MAX = 5;
const MAXLIST = 57;

function List(props) {
  const [page, setPage] = useState(1);
  const [nextVisible, setNextVisible] = useState(true);
  const [prevVisible, setPrevVisible] = useState(false);
  const [cardList, setCardsList] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(MAXLIST);

  const handleClick = async ({ target: { name } }) => {
    if (name === 'next') {
      setMin(max + 1);
      setMax(max + props.pagination);
      setPage(page + 1);
    } else {
      setPage(page - 1);
      setMax(min - 1);
      setMin(min - props.pagination);
    }
  };

  const paginations = (minIndex, maxIndex) => {
    console.log(minIndex, maxIndex, props.pagination);
    const arr = [];
    if (props.list.length === 0) return arr;
    for (let i = minIndex; i <= maxIndex; i += 1) {
      const item = props.list[i];
      if (!item) return arr;
      arr.push(item);
    }
    return arr;
  };

  useEffect(() => {
    setCardsList(paginations(min, max));
  }, []);

  useEffect(() => {
    console.log('May cards');
    setCardsList(paginations(min, max));
  }, [max, min]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [cardList]);

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
        {!!cardList &&
          cardList.length > 0 &&
          cardList.map((el, i) => (
            <Card
              key={`${i}-${el?.link}`}
              logo={el?.source === 'buscape' ? bscp : ml}
              {...el}
            />
          ))}
      </ul>
      <div className='pagination'>
        <button
          onClick={handleClick}
          name='prev'
          disabled={!prevVisible}
          type='button'
        >{`Previous page: ${page > 1 ? page - 1 : ''}`}</button>

        <button
          onClick={handleClick}
          disabled={!nextVisible}
          name='next'
          type='button'
        >{` Next Page: ${page + 1 <= MAX ? page + 1 : ''}`}</button>
      </div>
    </section>
  );
}

export default List;
