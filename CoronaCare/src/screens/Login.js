import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen';
import HomeButtons from '../components/atoms/homebuttons';

export default class Home extends Component {
    render() {
        return (
            
            <View style={styles.outsideWrapper}>
                <Text style={styles.welcomeText}>Log in</Text>
                <Text>Log in to your myaces.nus.edu account.</Text>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}>
                Insert Username    
                </TextInput>
                <TextInput style={styles.inputText}>
                Insert Password   
                </TextInput>
                </View>    
            </View>



        );
    }
}

const styles = StyleSheet.create({

    outsideWrapper: {
        backgroundColor: 'rgb(0,128,128)',
        display: 'flex',
        padding:30

    },
    welcomeText: {
        fontWeight: '300',
        fontSize: 40,
        color: '#000000',        
       
    },

       inputText: {
        fontWeight:'200',
        fontSize: 20,
        color: '#000000',
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginTop:10, marginBottom:10,
        
    }

    
   
});