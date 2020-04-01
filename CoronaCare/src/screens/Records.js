import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen';
import HomeButtons from '../components/atoms/homebuttons';

export default class Home extends Component {
    render() {
        return (
            
            <View style={styles.outsideWrapper}>
                <Text style={styles.welcomeText}>Records</Text>
                
            
            </View>



        );
    }
}

const styles = StyleSheet.create({

    outsideWrapper: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        padding:30

    },
    welcomeText: {
        fontWeight: '300',
        fontSize: 40,
        color: '#000000',        
       
    },


    
   
});