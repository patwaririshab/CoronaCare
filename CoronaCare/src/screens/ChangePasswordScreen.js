import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import backgroundImage from '../assets/images/bkgrdBlank.png';

const InputField = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      containerStyle={styles.inputContainerStyle}
      secureTextEntry={true}
      autoCapitalize={false}
      onChangeText={(newPass) => props.setNewValue(newPass)}
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      leftIconContainerStyle={{marginRight: 10}}
      rightIcon={
        props.verified === ''
          ? null
          : props.verified === true
          ? {type: 'font-awesome', name: 'check'}
          : {type: 'font-awesome', name: 'times'}
      }
    />
  );
};

const ChangePasswordScreen = () => {
  const [newPasswordOne, setNewPasswordOne] = useState('');
  const [newPasswordTwo, setNewPasswordTwo] = useState('');
  const [verifyNewPasswordTwo, setVerifyNewPasswordTwo] = useState('false');

  useEffect(() => {
    newPasswordOne === newPasswordTwo && newPasswordOne !== ''
      ? setVerifyNewPasswordTwo(true)
      : setVerifyNewPasswordTwo(false);
  }, [newPasswordOne, newPasswordTwo, setNewPasswordOne, setNewPasswordTwo]);

  const updatePassword = () => {
    try {
      if (newPasswordOne === newPasswordTwo) {
        auth()
          .currentUser.updatePassword(newPasswordOne)
          .then(alert('Successfully changed password!'));
      } else {
        alert('Your passwords do not match, please re-check your passwords');
      }
    } catch {
      (err) => alert('Failed to update password' + err);
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ImageBackground source={backgroundImage} style={styles.imageBagView}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={'position'}>
          <View style={styles.inputView} />
          <Text style={styles.headerText}>
            Please enter your new password and press submit
          </Text>
          <InputField
            placeholder={'Enter New Password'}
            setNewValue={setNewPasswordOne}
            verified={''}
          />
          <InputField
            placeholder={'Verify New Password'}
            setNewValue={setNewPasswordTwo}
            verified={verifyNewPasswordTwo}
          />
          <View style={styles.buttonView}>
            <Button
              buttonStyle={styles.button}
              title={'Change Password'}
              onPress={updatePassword}
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
    flexDirection: 'column',
  },
  imageBagView: {flex: 1, resizeMode: 'cover', justifyContent: 'flex-end'},
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputView: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    marginLeft: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputContainerStyle: {
    width: Dimensions.get('window').width * 0.9,
  },
  buttonView: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: '#062C49',
    borderRadius: 30,
    paddingVertical: 10,
  },
});
