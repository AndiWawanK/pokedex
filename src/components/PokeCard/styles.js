import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width / 2.2,
    height: width * 0.3,
    backgroundColor: Colors.WHITE,
    marginHorizontal: width * 0.01,
    marginTop: width * 0.02,
    borderRadius: 10,
    shadowColor: '#555',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  typeWrap: {
    backgroundColor: Colors.GRAY_MEDIUM,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 75,
  },
  typeName: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
  imageSection: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    width: width * 0.17,
    height: width * 0.17,
  },
});
