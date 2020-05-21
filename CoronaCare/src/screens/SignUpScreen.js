import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import auth from '@react-native-firebase/auth';
import {Input, Image} from 'react-native-elements';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  changeScreen = () => {
    console.log('WORKING');
    Navigation.setRoot({
      root: {
        component: {
          name: 'navigation.CoronaCare.NavigationTabInitialiser',
        },
      },
    });
  };

  signUpUser = () => {
    console.log('Signing in' + this.state.username);
    auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => {
        Alert.alert(
          '',
          'You have been successfully signed up',
          [
            {
              text: 'Continue',
              onPress: this.changeScreen,
            },
          ],
          {cancelable: false},
        );
      })
      .catch((error) => {
        switch (error) {
          case error.code === 'auth/email-already-in-use':
            alert('That email address is already in use!');
            break;
          case error.code === 'auth/invalid-email':
            alert('That email address is invalid!');
            break;
          default:
            alert(
              'Faled to sign up user successfully. Try again or contact your administrator',
            );
        }
      });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bkgrd.png')}
        style={styles.bkgrdImage}>
        <KeyboardAvoidingView
          style={styles.inputContainer}
          behavior={'padding'}>
          <Text style={styles.detailsText}>Sign up for a new account now.</Text>
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Username"
            leftIcon={{type: 'font-awesome', name: 'user'}}
            leftIconContainerStyle={{marginRight: 10}}
            autoCapitalize="none"
            onChangeText={(newText) => this.setState({username: newText})}
          />
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            leftIconContainerStyle={{marginRight: 10}}
            onChangeText={(newPass) => this.setState({password: newPass})}
          />
          <Button
            onPress={this.signUpUser.bind(this)}
            title="Submit"
            type="solid"
            buttonStyle={styles.buttonStyle}
            titleStyle={{color: 'white', fontSize: 15}}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.2,
  },
  buttonStyle: {
    margin: 10,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#062C49',
    borderRadius: 30,
    paddingVertical: 10,
  },
  bkgrdImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  outsideWrapper: {
    padding: 50,
    alignItems: 'center',
    marginTop: 50,
  },
  detailsText: {
    color: '#000000',
    alignSelf: 'flex-start',
    marginLeft: 24,
    marginBottom: 10,
  },
  inputText: {
    fontWeight: '200',
    fontSize: 18,
    color: '#000000',
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 6,
  },
  inputContainerStyle: {
    width: Dimensions.get('window').width * 0.9,
  },
});
