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
} from 'react-native';
import {Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import onGoogleButtonPress from '../services/GoogleSignin';
import {GoogleSigninButton} from '@react-native-community/google-signin';
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
    Navigation.setRoot({
      root: {
        component: {
          name: 'navigation.CoronaCare.NavigationTabInitialiser',
        },
      },
    });
  };

  sinInUser = () => {
    console.log('Signing in' + this.state.username);
    auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => {
        console.log('User account signed in!');
        this.changeScreen();
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
              'Ask your administrator for an account, or sign-in with Google',
            );
        }
      });
  };

  onSignUpPress = () => {
    Navigation.push('LOGIN_STACK', {
      component: {
        name: 'navigation.CoronaCare.SignUpScreen',
        options: {
          topBar: {
            visible: true,
            noBorder: true,
            // background: {
            //     color: '#ffffff00',
            //     translucent: true
            // },
            backButton: {
              color: '#147efb',
              showTitle: true,
              title: 'login screen',
            },
          },
        },
      },
    });
  };

  signInWithGoogle = () => {
    onGoogleButtonPress()
      .then(() => this.changeScreen())
      .catch(() => {
        alert('Failed to sign in with google');
      });
  };

  render() {
    return (
      <View style={styles.bkgrdContainer}>
        <ImageBackground
          source={require('../assets/images/bkgrd.png')}
          style={styles.bkgrdImage}>
          <KeyboardAvoidingView style={styles.inputContainer}>
            <View style={styles.topViewController}>
              <Text style={styles.detailsText}>
                Log in with your email and password
              </Text>
              <Input
                placeholder="Email"
                containerStyle={styles.inputContainerStyle}
                onChangeText={(newText) => this.setState({username: newText})}
                leftIcon={{type: 'font-awesome', name: 'user'}}
                leftIconContainerStyle={{marginRight: 10}}
                autoCapitalize={false}
              />
              <Input
                placeholder="Password"
                containerStyle={styles.inputContainerStyle}
                secureTextEntry={true}
                autoCapitalize={false}
                onChangeText={(newPass) => this.setState({password: newPass})}
                leftIcon={{type: 'font-awesome', name: 'lock'}}
                leftIconContainerStyle={{marginRight: 10}}
              />
            <Button
                onPress={this.sinInUser.bind(this)}
                title="Login"
                type="solid"
                buttonStyle={styles.buttonStyle}
                titleStyle={{color: 'white', fontSize: 15}}
              />
              <Text onPress={this.onSignUpPress} style={{color: 'black'}}>
                Forgot Password
              </Text>
            </View>
          </KeyboardAvoidingView>
          <View style={{ alignItems: 'center'}}>
              <Image
                source={require('../assets/images/loginDivider.png')}
                containerStyle={{
                  width: Dimensions.get('window').width * 0.9,
                  height: 15,
                }}
              />
              <Button
                title="Google Sign-In"
                type="outline"
                buttonStyle={[styles.buttonStyle]}
                titleStyle={{color: 'white', fontSize: 15}}
                onPress={this.signInWithGoogle}
                icon={{type: 'font-awesome', name: 'google', color: 'white'}}
                iconContainerStyle={{marginRight: 10}}
              />
              <Button
                title="Sign Up"
                type="outline"
                buttonStyle={[styles.buttonStyle, {marginBottom: 30}]}
                titleStyle={{color: 'white', fontSize: 15}}
                onPress={this.onSignUpPress}
              />
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.2,
  },
  topViewController: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.05,
  },
  bkgrdContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  welcomeText: {
    fontWeight: '300',
    fontSize: 40,
    color: '#FFFFFF',
  },

  detailsText: {
    color: '#000000',
    marginLeft: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
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
