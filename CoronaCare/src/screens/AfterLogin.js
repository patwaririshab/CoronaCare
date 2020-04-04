import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';





export default class Home extends Component {
    render() {
        return (
            
           
             <View style = {styles.outsideWrapper}>
                <View style={styles.tempButton}>    
                <Button 
                title = "Capture Temperature"
                type = "outline"
                
                /></View>

                <View style = {styles.tempButton}>
                <Button 
                title = "View Records"
                type = "outline"
                /></View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    outsideWrapper: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },

    tempButton: {
        marginTop: 20, marginBottom: 20, 
    }
});