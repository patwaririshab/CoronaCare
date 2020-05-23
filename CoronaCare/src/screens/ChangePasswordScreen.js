import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
} from 'react-native';
import {Button, Input} from 'react-native-elements';

import backgroundImage from '../assets/images/bkgrdBlank.png';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPasswordOne, setNewPasswordOne] = useState('');
  const [newPasswordTwo, setNewPasswordTwo] = useState('');

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ImageBackground source={backgroundImage} style={styles.imageBagView}>
        <KeyboardAvoidingView>
          <View style={styles.inputView} />
          <View style={styles.buttonView}>
            <Button
              buttonStyle={styles.button}
              title={'Change Password'}
              onPress={() => {}}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  imageBagView: {flex: 1, resizeMode: 'cover', justifyContent: 'center'},
  inputView: {},
  buttonView: {},
  button: {},
});
