// import { useState } from 'react';

import './App.css';
import Form from './components/Form';
// import useFetch from './hooks/useFetch';

function App() {
  // const { fetchLoading, fetchData } = useFetch('https://scrapeme.live/shop/');
  // console.log(fetchData);
  return (
    <main className='App'>
      <h1>Tuffy</h1>
      <Form />
    </main>
  );
}

export default App;
