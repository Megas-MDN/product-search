import { useState } from 'react';

import { useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import useFetch from './hooks/useFetch';

function App() {
  const [pagination, setPagination] = useState(0);
  const { fetchLoading, fetchData } = useFetch(import.meta.env.VITE_URL_GETALL);

  useEffect(() => {
    console.log(import.meta.env.VITE_URL_GETALL);
    setPagination(Math.ceil(fetchData.length / 5));
  }, [fetchData]);

  return (
    <main className='App'>
      <h1>Product Search</h1>
      <Form />
      {fetchLoading && <p>Tuff loading...</p>}
      {!fetchLoading && <List list={fetchData} pagination={pagination} />}
    </main>
  );
}

export default App;
