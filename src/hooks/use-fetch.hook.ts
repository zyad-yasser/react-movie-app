import { UseFetchResult } from './../types/hooks';
import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { apiKey, baseURL } from '../config';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL,
  params: {
    api_key: apiKey
  },
};

export const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    let isCancelled = false;
    if (!url || url.includes('undefined')) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios(url, axiosRequestConfig);
        !isCancelled && setData(data);
      } catch (error: any) {
        !isCancelled && setError(error as Error);
      } finally {
        !isCancelled && setLoading(false);
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return { loading, data, error };
};
