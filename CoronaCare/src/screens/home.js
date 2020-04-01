import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen';
import HomeButtons from '../components/atoms/homebuttons';

export default class Home extends Component {
    render() {
        return (
            
            <View style={styles.outsideWrapper}>
                <View style={styles.logoContainer}>
                <Image
                source={require('../components/img/thermometer.png')}
                style={styles.logo}/>
                </View>
                <Text style={styles.welcomeText}>NUS Declaration of Daily Temperature</Text>
            <HomeButtons></HomeButtons>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    outsideWrapper: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        padding:20
    },
    welcomeText: {
        fontWeight: '900',
        fontSize: 20,
        color: '#000000',
        marginTop:20, marginBottom:20,
        textAlign: 'center',
    },

    logo: { 
        width:50, height:50, 
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent:'center',
    }
   
});