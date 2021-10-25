import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.04,
  },
  listSection: {
    paddingHorizontal: width * 0.02,
  },
  filterSection: {
    marginHorizontal: width * 0.04,
  },
  btnFilter: isSelected => ({
    backgroundColor: isSelected ? Colors.PRIMARY : Colors.WHITE,
    borderWidth: 1,
    borderColor: isSelected ? Colors.PRIMARY : Colors.GRAY_DARK,
    marginHorizontal: width * 0.01,
    marginBottom: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    paddingHorizontal: width * 0.06,
    height: width * 0.07,
  }),
  btnFilterLabel: isSelected => ({
    color: isSelected ? Colors.WHITE : Colors.GRAY_LIGHT200,
    textTransform: 'capitalize',
  }),
});
