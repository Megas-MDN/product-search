import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(base, endpoint = '') {
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      const request = await axios.get(`${base}${endpoint}`, {
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Host: 'httpbin.org',
          'Sec-Ch-Ua':
            '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"macOS"',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-User': '?1',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
          'X-Amzn-Trace-Id': 'Root=1-630ce94f-289bc1c678d8cd7153e42f5a',
        },
      });
      // const response = await request.json();
      setFetchLoading(false);
      // setFetchData(response);
      setFetchData(request.data);
    };
    fetchResponse();
  }, [base, endpoint]);

  return { fetchLoading, fetchData };
}
