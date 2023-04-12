import { useEffect, useState } from 'react';

export default function useFetch(base, endpoint = '') {
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      const request = await fetch(`${base}${endpoint}`);
      const response = await request.json();
      setFetchLoading(false);
      setFetchData(response);
    };
    fetchResponse();
  }, [base, endpoint]);

  return { fetchLoading, fetchData };
}
