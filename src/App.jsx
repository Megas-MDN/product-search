import { useState } from 'react';

import { useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import useFetch from './hooks/useFetch';
import { BsGithub } from 'react-icons/bs';

function App() {
  const [pagination, setPagination] = useState(0);
  const [userHash, setUserHash] = useState('');
  const { fetchLoading, fetchData } = useFetch(import.meta.env.VITE_URL_GETALL);

  const generateHash = (n = 4, num = 4, arr = []) => {
    const bigString = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const getNRandom = (num, str = '') =>
      num <= 0 ? str : getNRandom(num - 1, str + getRamdomChar(bigString));
    const getRamdomChar = (bigStr) =>
      bigStr[Math.floor(Math.random() * bigStr.length)];
    arr.push(getNRandom(n));
    if (num <= 1) return new Date().getTime() + '-' + arr.join('-');
    return generateHash(n, num - 1, arr);
  };

  useEffect(() => {
    const hash = window.localStorage.getItem('userHash');
    if (!hash) {
      const newHash = generateHash(5, 5);
      window.localStorage.setItem('userHash', generateHash(5, 5));
      setUserHash(newHash);
    } else {
      setUserHash(hash);
    }
  }, []);

  useEffect(() => {
    console.log(import.meta.env.VITE_URL_GETALL);
    setPagination(Math.ceil(fetchData.length / 5));
  }, [fetchData]);

  return (
    <main className='App'>
      <h1>
        <a href='https://github.com/Megas-MDN/product-search' target='_black'>
          <BsGithub />
        </a>
        Product Search
      </h1>
      <Form user={userHash} />
      {fetchLoading && <p>Loading...</p>}
      {!fetchLoading && <List list={fetchData} pagination={pagination} />}
    </main>
  );
}

export default App;
