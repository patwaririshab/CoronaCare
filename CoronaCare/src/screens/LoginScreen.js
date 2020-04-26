import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button, ImageBackground,SafeAreaView } from 'react-native';
import { Navigation } from "react-native-navigation"
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import onGoogleButtonPress from '../services/GoogleSignin'

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
            .signInWithEmailAndPassword(this.state.username, this.state.password)
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
            <SafeAreaView style ={styles.bkgrdContainer}>
                <ImageBackground source = {require('../assets/images/bkgrd.png')} style ={styles.bkgrdImage}>
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
                            onPress={() => onGoogleButtonPress()}
                        />
                    </View>
                </View>
                </ImageBackground>
           
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({


    bkgrdImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
    },
    bkgrdContainer: {
        flex: 1,
        flexDirection: "column"
    },
    outsideWrapper: {

        padding: 50,
        alignItems: 'center',
        marginTop: 50

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