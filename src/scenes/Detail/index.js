import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Header, ModalCatch} from 'components';
import styles from './styles';
import useAnimation from './useAnimation';
import useDetail from './useDetail';

const Detail = ({route, navigation}) => {
  const paramData = route.params.data;
  const {animatedImage, rotateYAnimatedStyle} = useAnimation();
  const {
    modalCatch,
    setModalCatch,
    handleCatchPokemon,
    pokemonNickName,
    setPokemonNickName,
    handleSavePokemon,
  } = useDetail(paramData);
  return (
    <View style={styles.container}>
      <Header title={paramData.name} navigation={navigation} />
      <View style={styles.topHeaderSection}>
        <Animated.View style={{transform: [{scale: animatedImage.current}]}}>
          <Image source={{uri: paramData.image}} style={styles.pokemonImage} />
        </Animated.View>
        <View style={styles.typesSection}>
          {paramData.types.map((item, index) => (
            <View style={styles.typesWrap} key={index}>
              <Text style={styles.typesName}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.movesSection}>
        <Text style={styles.movesLabel}>Moves</Text>
        <FlatList
          data={paramData.moves}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.movesWrap}>
              <Text style={styles.movesName}>{item.move.name}</Text>
            </View>
          )}
        />
      </View>
      <Animated.View style={[styles.catchButtonSection, rotateYAnimatedStyle]}>
        <TouchableOpacity
          style={styles.catchButton}
          onPress={() => handleCatchPokemon()}>
          <Image
            source={require('assets/pokeball.png')}
            style={styles.catchButtonImage}
          />
        </TouchableOpacity>
      </Animated.View>
      <ModalCatch
        visible={modalCatch}
        pokemonName={paramData.name}
        onChangeNickName={val => setPokemonNickName(val)}
        value={pokemonNickName}
        onSave={() => handleSavePokemon()}
        onClose={() => setModalCatch(false)}
      />
    </View>
  );
};

export default Detail;
