import {StyleSheet, Dimensions, Platform, NativeModules} from 'react-native';
import {Colors} from 'styles';
const {width, height} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const HEADER_HEIGHT = width * 0.25 + StatusBarManager.HEIGHT;

export default StyleSheet.create({
  headerContainer: {
    height: width * 0.15,
    zIndex: 1000,
  },
  headerSection: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
  },
  btnSearch: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: 75,
    backgroundColor: Colors.GRAY_LIGHT100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    paddingHorizontal: width * 0.04,
    height: width * 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.WHITE,
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_LIGHT100,
  },
  btnSearchIcon: {
    fontSize: 20,
  },
  btnSearchCancel: {
    width: width * 0.09,
    height: width * 0.09,
    marginRight: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSearchCancelIcon: {
    fontSize: 30,
  },
  searchInput: {
    flex: 1,
    height: width * 0.1,
    backgroundColor: Colors.GRAY_LIGHT100,
    paddingHorizontal: width * 0.04,
    fontSize: 16,
    borderRadius: 40,
  },
  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: Colors.WHITE,
    paddingTop: HEADER_HEIGHT,
  },
  contentSection: {
    flex: 1,
  },
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.02,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.GRAY_LIGHT100,
  },
  pokemonImage: {
    width: width * 0.11,
    height: width * 0.11,
    marginRight: width * 0.02,
  },
  pokemonInfoSection: {
    flex: 1,
  },
  pokemonName: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  pokemonTypeName: {
    fontSize: 14,
    textTransform: 'capitalize',
    color: Colors.GRAY_LIGHT200,
  },
});
