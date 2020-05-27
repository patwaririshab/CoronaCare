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
      autoCapitalize={false}
      onChangeText={(email) => props.setNewValue(email)}
      leftIcon={{type: 'font-awesome', name: 'user'}}
      leftIconContainerStyle={{marginRight: 10}}
      autoCapitalize={false}
    />
  );
};

forgotPassword = (inputEmail) => {
    auth()
        .sendPasswordResetEmail(inputEmail)
        .then((response) => {
            alert('Please check your email...')
            response.json;
            })
        .catch((error) => {
        alert("Email not found");
      })
    console.log('My Input Email', inputEmail);
  }

const ResetPasswordScreen = () => {
  const [inputEmail, setEmail] = useState('');


  return (
    <SafeAreaView style={styles.outerContainer}>

      <ImageBackground source={backgroundImage} style={styles.imageBagView}>
          <Text style={styles.title}>Reset Password</Text>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          >
          <View style={styles.inputView} />
          <Text style={styles.headerText}>
            Enter your email for us to send you a reset link
          </Text>
          <InputField
            placeholder={'Email Address'}
            setNewValue={(email) => {setEmail(email);
            console.log(email)}}
          />
          <View style={styles.buttonView}>
            <Button
              buttonStyle={styles.button}
              title={'Submit'}
              onPress={forgotPassword(inputEmail)}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

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
  title: {
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'left',
    padding: 20,
  },
});
