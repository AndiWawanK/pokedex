import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const Header = props => {
  const {title, navigation, isBagScene} = props;
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.headerLeft}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" type="Feather" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.headerBody}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {isBagScene ? (
          <View style={styles.headerRight} />
        ) : (
          <TouchableOpacity
            style={styles.headerRight}
            onPress={() => navigation.navigate('Bags')}>
            <Icon
              name="bag-personal-outline"
              type="MaterialCommunityIcons"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
