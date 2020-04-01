import React, {Component} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen';


export default class Home extends Component {
    render() {
        return (
            
            <View>
                <Button 
                title = "Take Picture"
                color = "black"
                />
                
                <Button
                title = "View Records"
                color = "black"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

   
});