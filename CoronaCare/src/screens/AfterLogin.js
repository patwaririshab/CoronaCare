import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { Icon } from 'react-native-elements'




export default class Home extends Component {
    render() {
        return (
            
           
                <View>
                    
                <Button 
                small
                title = "Capture Temperature"
                rightIcon={{name: 'camera'}}
                type = "outline"
                style = {styles.buttonFirst}
                
                />

                <Button
                title = "View Records"
                color = "black"
                />
            </View>
        );
    }
}

