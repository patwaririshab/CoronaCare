import React, {Component} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Navigation } from 'react-native-navigation';


export default class RecordsScreen extends Component {
  render() {
    return (
      <View style={styles.outsideWrapper}>
        <Text style={styles.welcomeText}>Records</Text>
        <Button 
        title="Sign Out"
        onPress={() => {
          auth()
          .signOut()
          .then(() => console.log('User signed out!'))
          .then(() => { 
            Navigation.setRoot({
            root: {
              component: {
                name: "navigation.CoronaCare.App"
              }
            }
          })})
        }
      }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outsideWrapper: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    padding: 30,
  },
  welcomeText: {
    fontWeight: '300',
    fontSize: 40,
    color: '#000000',
  },
});

