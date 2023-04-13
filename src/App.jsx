// import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';
// import useFetch from './hooks/useFetch';

function App() {
  // const { fetchLoading, fetchData } = useFetch('https://scrapeme.live/shop/');

  return (
    <main className='App'>
      <h1>Product Search</h1>
      <Form />
      <List />
    </main>
  );
}

export default App;
