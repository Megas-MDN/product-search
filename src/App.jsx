// import { useState } from 'react';

import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const { fetchLoading, fetchData } = useFetch(
    'https://api.mercadolibre.com/sites/MLB/categories'
  );

  return (
    <main className='App'>
      <h1>Tuffy</h1>
      {fetchLoading && <h4>Carregando...</h4>}
      {!fetchLoading && <p>{JSON.stringify(fetchData, null, 2)}</p>}
    </main>
  );
}

export default App;
