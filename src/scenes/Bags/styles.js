import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  listSection: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingVertical: width * 0.03,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.GRAY_LIGHT100,
  },
  image: {
    width: width * 0.12,
    height: width * 0.12,
  },
  pokemonInfoSection: {
    flex: 1,
    paddingLeft: width * 0.02,
  },
  pokemonNickName: {
    fontSize: 16,
  },
  pokemonName: {
    fontSize: 14,
    color: Colors.BLACK_MEDIUM,
    textTransform: 'capitalize',
  },
  btnDelete: {
    // width: width * 0.05
  },
  btnDeleteIcon: {
    color: Colors.DANGER,
    fontSize: 23,
  },
  isNoData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
