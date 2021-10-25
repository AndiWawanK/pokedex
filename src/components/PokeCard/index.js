import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
const PokeCard = props => {
  const {name, types, image} = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        {props.loading ? (
          <Placeholder Animation={Fade} style={{flex: 1}}>
            <PlaceholderLine width={80} />
          </Placeholder>
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}
        {props.loading ? (
          <Placeholder Animation={Fade} style={{flex: 0.3}}>
            <PlaceholderLine width={80} />
          </Placeholder>
        ) : (
          <View style={styles.typeWrap}>
            <Text style={styles.typeName}>{types}</Text>
          </View>
        )}
      </View>
      <View style={styles.imageSection}>
        {props.loading ? (
          <Placeholder
            Animation={Fade}
            style={styles.mediaPlaceholder}
            Right={PlaceholderMedia}
          />
        ) : (
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
};

PokeCard.defaultProps = {
  loading: true,
};

export default PokeCard;
