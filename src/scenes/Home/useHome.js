/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';
const queryClient = new QueryClient();

const useHome = () => {
  const [limit, setLimit] = useState(16);
  const [filter, setFilter] = useState({
    data: [], // ['grass', 'fire', 'water', 'bug', 'normal', 'poison', 'electric', 'ground'],
    selected: 'all',
  });

  const fetchPokemon = async (nextPage, types) => {
    const results = [];
    const filterKey = ['all'];

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${nextPage}`);
    for (const item of data.results){
      const detail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
      item.types = detail.data.types[0].type.name;
      item.image = Object.values(detail.data.sprites.other)[1].front_default;

      // ambil data types dari api
      filterKey.push(detail.data.types[0].type.name);
      results.push(item);
    }

    // hapus data duplicate dari array filterKey
    const filterData = filterKey.filter(function(item, pos) {
      return filterKey.indexOf(item) === pos;
    });
    setFilter({...filter, data: filterData});
    if (types === 'all'){
      return results;
    } else {
      return results.filter(val => val.types === types);
    }
  };


  const {isFetching, isPlaceholderData, error, isError, data} = useQuery(['pokemons', limit, filter.selected, {types: 'fire'}], () => fetchPokemon(limit, filter.selected),{
    placeholderData: [1,2,3,4,5,6,7,8,9,10], // fake data
    keepPreviousData: true,
  });

  return {
    isFetching,
    isPlaceholderData,
    error,
    isError,
    data,
    limit,
    setLimit,
    filter,
    setFilter,
  };
};

export default useHome;
