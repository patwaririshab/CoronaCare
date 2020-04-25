/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, Dimensions } from 'react-native';
import RecordEntry from '../components/molecules/recordEntry';
import styles from '../styles/styles';
import auth from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import {getData} from '../services/FetchData';

var list = []

export default class RecordsScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      loading: false
    }
  }
  componentWillMount(){
    this.setState({loading:true})
    getData(list)
    this.setState({loading:false})
  }

  render() {
    return (
      <View style={styles.container}>
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
                name: 'navigation.CoronaCare.App',
              },
            },
          });});
        }
      }/>
      <Button
        title="Refresh Page"
        onPress={() => {
          this.setState({loading: true})
          list = []
          getData(list)
          this.setState({loading:false})
        }}
      />
        <FlatList
          keyExtractor={(item) => item.key}
          data={list}
          renderItem={({ item }) => <RecordEntry
            image={item.imageUrl}
            AMPM="AM"
            temperature={item.temperature}
            timestamp={item.timestamp} />
          }
        />
      </View>
    );
  }
}

