/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList, Button, StyleSheet, Image, Dimensions } from 'react-native';
import RecordEntry from '../components/molecules/recordEntry';
import styles from '../styles/styles';
import auth from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import {getData} from '../services/FetchData';

const LoadingView = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Text h1 >
        Loading
      </Text>
    </View>
  )
}

export default class RecordsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      list: []
    }
  }

  componentDidMount(){
    this.fetchFlatListData()
  }

  fetchFlatListData = () => {
      this.setState({loading: true})
      getData().then(result => {
      this.setState({list: result})
      this.setState({loading: false})
    })
  }

  getAmOrPm = (firebaseTimestamp) => {
    const date = firebaseTimestamp.toDate()
    if (date.getHours() > 11) {return "PM"}
    return "AM"
  }

  render() {
    const { loading, list } = this.state
     return (
      <SafeAreaView style={styles.container}>
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
        onPress={this.fetchFlatListData}
      />
      {loading ? 
      <LoadingView/> :
        <FlatList
          keyExtractor={(item) => item.key}
          data={list}
          renderItem={({ item }) => <RecordEntry
            image={item.imageUrl}
            AMPM={this.getAmOrPm(item.firebaseTimestamp)}
            temperature={item.temperature}
            timestamp={item.timestamp} />
          }
        />}
      </SafeAreaView>
    );
  }
}

