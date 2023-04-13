import React, { useState } from 'react';
import './Form.css';
function Form() {
  const [source, setSource] = useState('Todas');
  const [category, setCategory] = useState('Category');

  const local = [
    { value: '', text: 'Todas' },
    { value: 'mercadoLivre', text: 'Mercado Livre' },
    { value: 'buscape', text: 'Buscapé' },
  ];
  const cats = [
    { value: '', text: 'Category' },
    { value: 'geladeira', text: 'Geladeira' },
    { value: 'tv', text: 'TV' },
    { value: 'celular', text: 'Celular' },
  ];
  return (
    <form className='form-container'>
      <select
        className='select-source'
        name='source'
        id='source'
        onChange={({ target: { value } }) => {
          console.log(value);
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
          console.log(value);
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
        placeholder='find a product'
        className='input-search'
      />
      <button type='button'>Search</button>
    </form>
  );
}

export default Form;
