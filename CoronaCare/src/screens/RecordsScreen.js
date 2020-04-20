import React, { Component } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, Dimensions } from 'react-native';
import RecordEntry from '../components/molecules/recordEntry';
import styles from '../styles/styles'
import auth from '@react-native-firebase/auth';
import { Navigation } from 'react-native-navigation';

export default class RecordsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const DATA = [
      { title: "AM", timestamp: '19/4/20, 10:41am', image: 'https://lh3.googleusercontent.com/s7JYQNTzk_3KfJIo0EFoz4S7YEJ41KcxXLUpYozq07TbBvMZirPk02Ny3UARywv3YCyIUk03kSyYUtoF0Q4qrMQ6iUf9rhc1x9CWexCBiuUAEggO_2MLDMLz2EBhFeZLdjgheiGl-LwIE2FhezsS_ZKtxbb3rh8gzcyvtW7xeQZXwM3g7oM5QYVnODef-kU5YhcQ3U5BhOcM3xxAM89jITdmFKRkVrY2pbPqsrCM5wLWhqpATo7nw-SGmNADfJISX9_HcAehSjAOH_QEdUCH77wEN_AypXNEpWlQHjQBexk1IIQrOe8XCpzpEhvNouIDnysYz3I5s4wlcfyxvpT5RTCzu6zm_xyQmSzt9FUeBqu-CNx_ippxr84Ey-jI8Pk8vYrL7FV1WItUG91AItt8roXGC1QBRvapwnXosL7kLe9tzs13Psc1L8_D273fjmIUjCiwv5a9qF1A3Ujr-CxbAooCcZYiS5aQvgowHjaTbRUSRTh_Q_yBeGW16Vn63LXu0dZNeY9zaromwdezLeP7-MJunW_CSwmGIHFi0qPgB7IkTmOvtqVFko0x-nUu7j9Tn9Zb04Wy7QbVZ4jRw1fiQI5zssBdRukOMhtkQJdVKZ4V8ECmqE-V_6iqAo7jXoG_oh6SSBOepeuZzEha6mLuGBzoqEdWmHC8HjRyKVu9cZcQQ0MSF7lOEMc3xhvxqA=w1112-h1481-no', temperature: "36.7", key: "1" },
      { title: "PM", timestamp: '19/4/20, 2:36pm', image: "https://lh3.googleusercontent.com/s7JYQNTzk_3KfJIo0EFoz4S7YEJ41KcxXLUpYozq07TbBvMZirPk02Ny3UARywv3YCyIUk03kSyYUtoF0Q4qrMQ6iUf9rhc1x9CWexCBiuUAEggO_2MLDMLz2EBhFeZLdjgheiGl-LwIE2FhezsS_ZKtxbb3rh8gzcyvtW7xeQZXwM3g7oM5QYVnODef-kU5YhcQ3U5BhOcM3xxAM89jITdmFKRkVrY2pbPqsrCM5wLWhqpATo7nw-SGmNADfJISX9_HcAehSjAOH_QEdUCH77wEN_AypXNEpWlQHjQBexk1IIQrOe8XCpzpEhvNouIDnysYz3I5s4wlcfyxvpT5RTCzu6zm_xyQmSzt9FUeBqu-CNx_ippxr84Ey-jI8Pk8vYrL7FV1WItUG91AItt8roXGC1QBRvapwnXosL7kLe9tzs13Psc1L8_D273fjmIUjCiwv5a9qF1A3Ujr-CxbAooCcZYiS5aQvgowHjaTbRUSRTh_Q_yBeGW16Vn63LXu0dZNeY9zaromwdezLeP7-MJunW_CSwmGIHFi0qPgB7IkTmOvtqVFko0x-nUu7j9Tn9Zb04Wy7QbVZ4jRw1fiQI5zssBdRukOMhtkQJdVKZ4V8ECmqE-V_6iqAo7jXoG_oh6SSBOepeuZzEha6mLuGBzoqEdWmHC8HjRyKVu9cZcQQ0MSF7lOEMc3xhvxqA=w1112-h1481-no", temperature: "36.2", key: "2" }
    ]
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
                name: "navigation.CoronaCare.App"
              }
            }
          })})
        }
      }/>
        <FlatList
          keyExtractor={(item) => item.key}
          data={DATA}
          renderItem={({ item }) => <RecordEntry
            image={item.image}
            title={item.title}
            temperature={item.temperature}
            timestamp={item.timestamp} />
          }
        />
      </View>
    );
  }
}

