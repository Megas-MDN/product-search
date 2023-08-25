import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(base, endpoint = '') {
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      const request = await axios.get(`${base}${endpoint}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      setFetchLoading(false);
      setFetchData(request.data);
    };
    fetchResponse();
  }, [base, endpoint]);

  return { fetchLoading, fetchData, setFetchData, setFetchLoading };
}
