import React, { useEffect, useState } from 'react';
import Card from './Card';
import ml from '../assets/logo-ml.png';
import bscp from '../assets/logo-buscape.png';
import { AiFillCaretDown } from 'react-icons/ai';
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
      setMax(max + MAXLIST + 1);
      setPage(page + 1);
      setPrevVisible(true);
    } else {
      setPage(page - 1);
      setMax(min - 1);
      setMin(min - MAXLIST);
      if (page - 2 <= 0) {
        setPrevVisible(false);
      }
    }
  };

  const paginations = (minIndex, maxIndex) => {
    const arr = [];
    if (props.list.length === 0) return arr;
    for (let i = minIndex; i <= maxIndex; i += 1) {
      const item = props.list[i];
      if (!item) {
        setNextVisible(false);
        return arr.length > 0 ? arr : cardList;
      } else {
        setNextVisible(true);
      }
      arr.push(item);
    }
    return arr;
  };

  useEffect(() => {
    setCardsList(paginations(min, max));
  }, []);

  useEffect(() => {
    setCardsList(paginations(min, max));
  }, [max, min]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [cardList]);

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
      <button
        type='button'
        className='btn-pos up'
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      >
        <AiFillCaretDown size={60} />
      </button>
      <button
        type='button'
        className='btn-pos down'
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          })
        }
      >
        <AiFillCaretDown size={60} />
      </button>
    </section>
  );
}

export default List;
