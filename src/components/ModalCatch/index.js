import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const ModalCatch = props => (
  <Modal animationType="slide" transparent={true} visible={props.visible}>
    <View style={styles.centeredView}>
      <TouchableOpacity style={styles.btnClose} onPress={props.onClose}>
        <Icon name="close" type="AntDesign" style={styles.btnCloseIcon} />
      </TouchableOpacity>
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Gotcha!</Text>
            <Text style={styles.modalSubTitle}>
              {`Enter your ${props.pokemonName} nickname`}
            </Text>
            <View style={styles.inputItem}>
              <TextInput
                style={styles.input}
                onChangeText={props.onChangeNickName}
                value={props.value}
              />
            </View>
            <TouchableOpacity style={styles.btnSave} onPress={props.onSave}>
              <Text style={styles.btnSaveTitle}>Save to pokebag</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  </Modal>
);

export default ModalCatch;
