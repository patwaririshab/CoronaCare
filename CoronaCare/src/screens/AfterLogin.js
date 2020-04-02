import React, {Component} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen';
import { Navigation } from 'react-native-navigation';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    changeToCameraScreen = () => {
        Navigation.setRoot({
            root: {
                component: {
                    name: "navigation.CoronaCare.CameraScreen"
                }
            }
        })
    }

    render() {
        return (
            
            <View>
                <Button 
                title = "Take Picture"
                color = "black"
                onPress = {this.changeToCameraScreen.bind(this)}
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