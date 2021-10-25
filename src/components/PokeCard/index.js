import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const PokeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.name}>charmander</Text>
        <View style={styles.typeWrap}>
          <Text style={styles.typeName}>fire</Text>
        </View>
      </View>
      <View style={styles.imageSection}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default PokeCard;
