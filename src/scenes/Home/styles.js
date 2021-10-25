import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 25,
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.04,
  },
  listSection: {
    alignItems: 'center',
  },
});
