import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 0.16,
    backgroundColor: Colors.WHITE,
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  headerLeft: {
    flex: 0.2,
    alignItems: 'flex-start',
    marginLeft: -5,
  },
  headerRight: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  headerBody: {
    flex: 1,
    paddingHorizontal: width * 0.02,
  },
  icon: {
    fontSize: 30,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
  },
});
