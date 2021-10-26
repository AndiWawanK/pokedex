import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeaderSection: {
    height: width / 1.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImage: {
    width: width * 0.4,
    height: width * 0.4,
  },
  typesSection: {
    flexDirection: 'row',
  },
  typesWrap: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: width * 0.07,
    paddingVertical: width * 0.02,
    borderRadius: 75,
    marginHorizontal: width * 0.01,
  },
  typesName: {
    fontSize: 16,
  },
  movesSection: {
    flex: 1,
    borderTopLeftRadius: width * 0.07,
    borderTopRightRadius: width * 0.07,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.04,
  },
  movesLabel: {
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
    paddingBottom: width * 0.02,
  },
  movesWrap: {
    paddingHorizontal: width * 0.034,
    paddingVertical: width * 0.014,
    marginTop: width * 0.012,
    borderRadius: 75,
    backgroundColor: Colors.PRIMARY,
    marginRight: width * 0.012,
  },
  movesName: {
    fontSize: 13,
    color: Colors.WHITE,
  },

  catchButton: {
    position: 'absolute',
    bottom: width * 0.05,
    backgroundColor: Colors.WHITE,
    borderRadius: 75,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  catchButtonImage: {
    width: width * 0.16,
    height: width * 0.16,
  },
});
