import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {PokeCard} from 'components';
import styles from './styles';
import useHome from './useHome';

const Home = ({navigation}) => {
  const {isLoading} = useHome();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        contentContainerStyle={styles.listSection}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({item, index}) => <PokeCard />}
      />
    </View>
  );
};

export default Home;
