import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form(props) {
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [input, setInput] = useState('');

  const local = [
    { value: '', text: 'Todas' },
    { value: 'mercado_livre', text: 'Mercado Livre' },
    { value: 'buscape', text: 'Buscapé' },
  ];
  const cats = [
    { value: '', text: 'Category' },
    { value: 'geladeira', text: 'Geladeira' },
    { value: 'tv', text: 'TV' },
    { value: 'celular', text: 'Celular' },
  ];

  const handleClick = async () => {
    props.setFetchLoading(true);
    const queryClean = input
      ? input.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
      : '';
    const response = await axios.get(
      `${
        import.meta.env.VITE_URL_SEARCH
      }q=${queryClean}&cat=${category}&web=${source}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `${import.meta.env.VITE_HASH_ATT}`,
        },
      }
    );
    props.setFetchLoading(false);
    props.setFetchData(response.data);
  };

  return (
    <form className='form-container'>
      <select
        className='select-source'
        name='source'
        id='source'
        onChange={({ target: { value } }) => {
          setSource(value);
        }}
        value={source}
        data-testid='source-input'
      >
        {local.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <select
        className='select-category'
        name='category'
        id='category'
        onChange={({ target: { value } }) => {
          setCategory(value);
        }}
        value={category}
        data-testid='category-input'
      >
        {cats.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <input
        type='text'
        value={input}
        placeholder='find a product'
        className='input-search'
        data-testid='input-search'
        onChange={({ target: { value } }) => setInput(value)}
      />
      <button type='button' onClick={handleClick} data-testid='btn-source'>
        Search
      </button>
    </form>
  );
}

export default Form;
