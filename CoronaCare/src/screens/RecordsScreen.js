/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Dimensions, Alert, ImageBackground } from 'react-native';
import RecordEntry from '../components/molecules/recordEntry';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';
import auth from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import {getData} from '../services/FetchData';
import {SwipeListView} from 'react-native-swipe-list-view';
import { deleteRecord } from '../services/DeleteData';
import {Icon} from 'react-native-elements';

const LoadingView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>
        Loading...
      </Text>
    </View>
  );
};

const RecordsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const fetchFlatListData = () => {
    setLoading(true);
    getData()
    .then(result => {
      setList(result);
      setLoading(false);
    });
  };

  const onRightAction = async rowKey => {
    const recordId = rowKey;
    Alert.alert(
      'Warning',
      'Are you sure you want to delete this record?',
      [
        {
          text: 'Confirm',
          onPress: async () => {
            try {
              deleteRecord(recordId);
            }
            catch (err) {
              alert(`Failed to delete record with error: ${err}`);
            }
            fetchFlatListData();
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
      ]
    );

  };

  useEffect(() => fetchFlatListData() , []);
  const getAmOrPm = (firebaseTimestamp) => {
    const date = firebaseTimestamp.toDate();
    if (date.getHours() > 11) {return 'PM';}
    return 'AM';
  };
  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bkgrdBlank.png')}
          style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
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
      <Text style={{textAlign: 'center'}}>Pull down to refresh</Text>
      {loading ?
      <LoadingView/> :
        <SwipeListView
          useNativeDriver={true}
          disableRightSwipe
          keyExtractor={(item) => item.id}
          data={list}
          rightOpenValue={-80}
          friction={70}
          tension={50}
          swipeToOpenPercent={50}
          rightActivationValue={-Dimensions.get('window').width * 0.75}
          onRightAction={onRightAction}
          onRefresh={fetchFlatListData}
          refreshing={loading ? true : false}
          renderItem={({ item }) => <RecordEntry
            image={item.imageUrl}
            AMPM={getAmOrPm(item.firebaseTimestamp)}
            temperature={item.temperature}
            timestamp={item.timestamp}
            />
          }
          renderHiddenItem={({ item }) => (
          <View style={{ height: 140, display: 'flex', backgroundColor: '#ff0000',flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
              <Icon type="font-awesome" name="trash" color="#ffffff" containerStyle={{marginRight: 20}} size={40}/>
          </View>
          )}
        />}
      </ImageBackground>
      </SafeAreaView>
  );
};

  export default RecordsScreen;
