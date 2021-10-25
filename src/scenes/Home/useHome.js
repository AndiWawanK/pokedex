import {useState, useEffect} from 'react';
import { useQuery } from 'react-query';

const useHome = () => {
  const [isLoading, setLoading] = useState(true);

  return {
    isLoading,
  };
};

export default useHome;
