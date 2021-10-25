import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {Icon} from 'components';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const HeaderSearchBar = props => {
  const inputRef = useRef(null);
  const [animated, setAnimated] = useState({
    input_section_translateX: new Animated.Value(width),
    content_section_translateY: new Animated.Value(height),
    cancel_button_opacity: new Animated.Value(0),
    content_opacity: new Animated.Value(0),
  });

  const handleFocused = () => {
    const input_section_translateX_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const cancel_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    const content_section_translateY_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    Animated.timing(
      animated.input_section_translateX,
      input_section_translateX_config,
    ).start();
    Animated.timing(
      animated.cancel_button_opacity,
      cancel_button_opacity_config,
    ).start();
    Animated.timing(
      animated.content_section_translateY,
      content_section_translateY_config,
    ).start();
    Animated.timing(animated.content_opacity, content_opacity_config).start();

    inputRef.current.focus();
  };

  const handleBlured = () => {
    const input_section_translateX_config = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };
    const cancel_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const content_section_translateY_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    Animated.timing(
      animated.input_section_translateX,
      input_section_translateX_config,
    ).start();
    Animated.timing(
      animated.cancel_button_opacity,
      cancel_button_opacity_config,
    ).start();
    Animated.timing(
      animated.content_section_translateY,
      content_section_translateY_config,
    ).start();
    Animated.timing(animated.content_opacity, content_opacity_config).start();
    inputRef.current.blur();
    inputRef.current.clear();
  };
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Pokedex</Text>
          <TouchableOpacity
            style={styles.btnSearch}
            onPress={() => handleFocused()}>
            <Icon name="search" type="Feather" style={styles.btnSearchIcon} />
          </TouchableOpacity>
          <Animated.View
            style={[
              styles.searchBox,
              {transform: [{translateX: animated.input_section_translateX}]},
            ]}>
            <Animated.View style={{opacity: animated.cancel_button_opacity}}>
              <TouchableOpacity
                onPress={() => handleBlured()}
                style={styles.btnSearchCancel}>
                <Icon
                  name="chevron-left"
                  type="Feather"
                  style={styles.btnSearchCancelIcon}
                />
              </TouchableOpacity>
            </Animated.View>
            <TextInput
              ref={inputRef}
              autoFocus={true}
              placeholder="Type pokemon name . . ."
              clearButtonMode="always"
              onChangeText={props.onSearch}
              style={styles.searchInput}
            />
          </Animated.View>
        </View>
      </View>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: animated.content_opacity,
            transform: [{translateY: animated.content_section_translateY}],
          },
        ]}>
        <SafeAreaView style={styles.contentSection}>
          <FlatList
            data={props.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.pokemonItem}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.pokemonImage}
                />
                <View style={styles.pokemonInfoSection}>
                  <Text style={styles.pokemonName}>{item.name}</Text>
                  <Text style={styles.pokemonTypeName}>
                    {'Types: ' + item.types}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default HeaderSearchBar;
