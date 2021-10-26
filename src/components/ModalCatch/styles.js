import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: 0,
    backgroundColor: 'rgba(0,0,0, .5)',
    justifyContent: 'flex-end',
  },
  modalView: {
    height: width * 0.6,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modalContent: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
  },
  modalSubTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  inputItem: {
    height: width * 0.11,
    borderWidth: 1,
    borderColor: Colors.GRAY_LIGHT100,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: width * 0.04,
  },
  input: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  btnSave: {
    height: width * 0.11,
    backgroundColor: Colors.PRIMARY,
    marginTop: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnSaveTitle: {
    fontSize: 16,
    color: Colors.WHITE,
  },
  btnClose: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: 75,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: width * 0.04,
    marginBottom: width * 0.02,
  },
  btnCloseIcon: {
    fontSize: 20,
  },
});
