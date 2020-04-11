import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from "react-native-navigation"
import Colors from 'react-native/Libraries/NewAppScreen';
import HomeButtons from '../components/atoms/homebuttons';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin'

async function onGoogleButtonPress() {
    await GoogleSignin.configure({
        webClientId: "109484316758-i49r5g01u99t6l738vncov3p00c7bne2.apps.googleusercontent.com",
        // iosClientId: "109484316758-0dp9vjjepnkm1opeaqind03n11531p3q.apps.googleusercontent.com"
    })
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        state = {
            username: "",
            password: ""
        }
    }

    changeScreen = () => {
        Navigation.setRoot({
            root: {
                component: {
                    name: "navigation.CoronaCare.NavigationTabInitialiser"
                }
            }
        });
    }

    sinInUser = () => {
        console.log("Signing in" + this.state.username)
        auth()
            .createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then(() => {
                console.log('User account created & signed in!');
                this.changeScreen.bind(this)
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <View style={styles.outsideWrapper}>
                    <Text style={styles.welcomeText}>Log in</Text>
                    <Text style={styles.detailsText}>Log in to your myaces.nus.edu account.</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Username"
                            autoCapitalize="none"
                            onChangeText={newText => this.setState({ username: newText })} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={newPass => this.setState({ password: newPass })} />
                        <Button
                            onPress={this.sinInUser.bind(this)}
                            title="Submit">
                            Submit
                        </Button>
                        <Button
                            title="Google Sign-In"
                            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                        />
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({


    linearGradient: {
        flex: 1,
    },
    outsideWrapper: {

        padding: 50,
        alignItems: 'center',
        marginTop: 150

    },
    welcomeText: {
        fontWeight: '300',
        fontSize: 40,
        color: '#FFFFFF',

    },

    detailsText: {
        color: '#FFFFFF'
    },
    inputText: {
        fontWeight: '200',
        fontSize: 18,
        color: '#000000',
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginTop: 10, marginBottom: 10, paddingLeft: 10,
        borderRadius: 6,
    }
});