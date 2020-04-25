import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class LoginScreen extends Component {
     render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <View style={styles.outsideWrapper}>
                <Image source={require('../assets/images/Thermometer.jpg')} />
                <View style ={styles.tempInput}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Insert Temperature"
                    autoCapitalize="none"
                />
                <Text style={{textAlignVertical: "center", fontSize: 25, paddingLeft:8, color:"white" }}>°C</Text>
                </View>
                    <Button title = "Confirm"></Button>

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
    inputText: {
        fontWeight: '200',
        fontSize: 18,
        color: '#000000',
        height: 40,
        width: 175,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginTop: 10, marginBottom: 10, paddingLeft: 10,
        borderRadius: 6,
    },

    tempInput: {
        display: "flex",
        flexDirection: "row"

    }
    
});