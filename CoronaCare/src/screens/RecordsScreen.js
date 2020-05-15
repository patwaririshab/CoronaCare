/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import RecordEntry from '../components/molecules/recordEntry';
import { Button } from 'react-native-elements'
import styles from '../styles/styles';
import auth from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import {getData} from '../services/FetchData';

const LoadingView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>
        Loading...
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
        type="clear"
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
        type= "clear"
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

