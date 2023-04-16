import { useState } from 'react';

import { useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import useFetch from './hooks/useFetch';
import { BsGithub } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { AiFillDatabase } from 'react-icons/ai';
import Loader from './components/Loader';

function App() {
  const [pagination, setPagination] = useState(0);
  const { fetchLoading, fetchData, setFetchData, setFetchLoading } = useFetch(
    import.meta.env.VITE_URL_GETALL
  );

  useEffect(() => {
    setPagination(Math.ceil(fetchData.length / 5));
  }, [fetchData]);

  return (
    <main className='App'>
      <h1>
        <a href='https://github.com/Megas-MDN/product-search' target='_black'>
          <BsGithub />
        </a>
        Product Search
        {fetchData?.source === 'database' ? <AiFillDatabase /> : <TbWorldWww />}
      </h1>
      <Form {...{ setFetchData, setFetchLoading }} />
      {fetchLoading && (
        <>
          <Loader />
        </>
      )}
      {!fetchLoading && (
        <List
          list={fetchData.results}
          pagination={pagination}
          source={fetchData.source}
        />
      )}
    </main>
  );
}

export default App;
