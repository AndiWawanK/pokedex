import React, {useRef, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {Header, Icon} from 'components';
import styles from './styles';
import useBags from './useBags';

const Bags = ({navigation}) => {
  const {pokemons, extraPokemons, handleDeletePokemon} = useBags();
  return (
    <View style={styles.container}>
      <Header title={'Pokebag'} isBagScene={true} navigation={navigation} />
      {pokemons.length <= 0 && (
        <View style={styles.isNoData}>
          <Text style={styles.isNoDataLabel}>You don't have any pokemon!</Text>
        </View>
      )}
      <FlatList
        data={pokemons}
        extraData={extraPokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.listSection}
            onPress={() => navigation.navigate('Detail', {data: item})}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
            <View style={styles.pokemonInfoSection}>
              <Text style={styles.pokemonNickName}>{item.nickname}</Text>
              <Text style={styles.pokemonName}>{item.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={() => handleDeletePokemon(item)}>
              <Icon
                name="trash-2"
                type="Feather"
                style={styles.btnDeleteIcon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Bags;
