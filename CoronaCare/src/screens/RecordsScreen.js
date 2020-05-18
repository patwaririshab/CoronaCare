/* eslint-disable prettier/prettier */
import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import RecordEntry from '../components/molecules/recordEntry';
import { Button } from 'react-native-elements'
import styles from '../styles/styles';
import auth from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import {getData} from '../services/FetchData';
import {SwipeListView} from 'react-native-swipe-list-view';

const LoadingView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>
        Loading...
      </Text>
    </View>
  )
}

const RecordsScreen = () => {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])

  const fetchFlatListData = () => {
    setLoading(true)
    getData()
    .then(result => {
      setList(result)
      setLoading(false)
    })
  }

  useEffect(() => fetchFlatListData() , [])
  const getAmOrPm = (firebaseTimestamp) => {
    const date = firebaseTimestamp.toDate()
    if (date.getHours() > 11) {return "PM"}
    return "AM"
  }

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
        onPress={fetchFlatListData}
      />
      {loading ? 
      <LoadingView/> :
        <SwipeListView
          disableRightSwipe
          friction={40}
          keyExtractor={(item) => item.key}
          data={list}
          renderItem={({ item }) => <RecordEntry
            image={item.imageUrl}
            AMPM={getAmOrPm(item.firebaseTimestamp)}
            temperature={item.temperature}
            timestamp={item.timestamp}
            />
          }
          renderHiddenItem={({ item }) => (
          <View style={{ height: 140, display: 'flex', backgroundColor: '#ff0000',flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={{fontSize: 30, paddingEnd: 10}}>Delete</Text>
          </View>
          )}
        />}
      </SafeAreaView>
  )}

  export default RecordsScreen

