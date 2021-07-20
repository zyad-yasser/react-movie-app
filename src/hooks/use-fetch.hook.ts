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
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios(url, axiosRequestConfig);
        setData(data);
      } catch (error: any) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};
