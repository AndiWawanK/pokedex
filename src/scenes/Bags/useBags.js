import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

const useBags = () => {
  const [pokemons, setPokemons] = useState([]);
  const [extraPokemons, setExtraPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await AsyncStorage.getItem('pokebags');
      if (data) {
        setPokemons(JSON.parse(data));
      }
    })();
  }, []);

  const handleDeletePokemon = async item => {
    const index = pokemons.indexOf(item);
    if (index > -1) {
      pokemons.splice(index, 1);
      setExtraPokemons(pokemons);
      await AsyncStorage.setItem('pokebags', JSON.stringify(pokemons));
    }
  };

  return {pokemons, extraPokemons, handleDeletePokemon};
};

export default useBags;
