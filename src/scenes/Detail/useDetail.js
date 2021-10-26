import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useDetail = paramData => {
  const [modalCatch, setModalCatch] = useState([]);
  const [pokemonNickName, setPokemonNickName] = useState('');

  const handleCatchPokemon = () => {
    const destiny = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    if (destiny % 2 === 1) {
      // lucky
      setModalCatch(true);
    } else {
      // not lucky
      alert('Sorry, lady luck not in your side!');
    }
  };

  const handleSavePokemon = async () => {
    paramData.nickname = pokemonNickName;
    const bags = await AsyncStorage.getItem('pokebags');
    if (bags) {
      let prevData = JSON.parse(bags);
      prevData.push(paramData);
      await AsyncStorage.setItem('pokebags', JSON.stringify(prevData));
      setModalCatch(false);
    } else {
      await AsyncStorage.setItem('pokebags', JSON.stringify([paramData]));
      setModalCatch(false);
    }
  };

  return {
    modalCatch,
    setModalCatch,
    handleCatchPokemon,
    pokemonNickName,
    setPokemonNickName,
    handleSavePokemon,
  };
};

export default useDetail;
