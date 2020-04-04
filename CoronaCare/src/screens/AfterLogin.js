import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
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
             <View style = {styles.outsideWrapper}>
                <View style={styles.tempButton}>    
                  <Button 
                  title = "Capture Temperature"
                  type = "outline"             
                  onPress = {this.changeToCameraScreen.bind(this)}
                  />
                </View>

                <View style = {styles.tempButton}>
                  <Button 
                  title = "View Records"
                  type = "outline"
                  color = "black"
                  onPress = {this.changeToCameraScreen.bind(this)}
                  />
                </View>
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