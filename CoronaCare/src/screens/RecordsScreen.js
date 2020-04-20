import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, Dimensions} from 'react-native';

export default class RecordsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const DATA = [
      {title: "AM", timestamp:'19/4/20, 10:41am', image:'https://lh3.googleusercontent.com/s7JYQNTzk_3KfJIo0EFoz4S7YEJ41KcxXLUpYozq07TbBvMZirPk02Ny3UARywv3YCyIUk03kSyYUtoF0Q4qrMQ6iUf9rhc1x9CWexCBiuUAEggO_2MLDMLz2EBhFeZLdjgheiGl-LwIE2FhezsS_ZKtxbb3rh8gzcyvtW7xeQZXwM3g7oM5QYVnODef-kU5YhcQ3U5BhOcM3xxAM89jITdmFKRkVrY2pbPqsrCM5wLWhqpATo7nw-SGmNADfJISX9_HcAehSjAOH_QEdUCH77wEN_AypXNEpWlQHjQBexk1IIQrOe8XCpzpEhvNouIDnysYz3I5s4wlcfyxvpT5RTCzu6zm_xyQmSzt9FUeBqu-CNx_ippxr84Ey-jI8Pk8vYrL7FV1WItUG91AItt8roXGC1QBRvapwnXosL7kLe9tzs13Psc1L8_D273fjmIUjCiwv5a9qF1A3Ujr-CxbAooCcZYiS5aQvgowHjaTbRUSRTh_Q_yBeGW16Vn63LXu0dZNeY9zaromwdezLeP7-MJunW_CSwmGIHFi0qPgB7IkTmOvtqVFko0x-nUu7j9Tn9Zb04Wy7QbVZ4jRw1fiQI5zssBdRukOMhtkQJdVKZ4V8ECmqE-V_6iqAo7jXoG_oh6SSBOepeuZzEha6mLuGBzoqEdWmHC8HjRyKVu9cZcQQ0MSF7lOEMc3xhvxqA=w1112-h1481-no', temperature: "36.7", key: "1"},
      {title: "PM", timestamp:'19/4/20, 2:36pm',  image:"https://lh3.googleusercontent.com/s7JYQNTzk_3KfJIo0EFoz4S7YEJ41KcxXLUpYozq07TbBvMZirPk02Ny3UARywv3YCyIUk03kSyYUtoF0Q4qrMQ6iUf9rhc1x9CWexCBiuUAEggO_2MLDMLz2EBhFeZLdjgheiGl-LwIE2FhezsS_ZKtxbb3rh8gzcyvtW7xeQZXwM3g7oM5QYVnODef-kU5YhcQ3U5BhOcM3xxAM89jITdmFKRkVrY2pbPqsrCM5wLWhqpATo7nw-SGmNADfJISX9_HcAehSjAOH_QEdUCH77wEN_AypXNEpWlQHjQBexk1IIQrOe8XCpzpEhvNouIDnysYz3I5s4wlcfyxvpT5RTCzu6zm_xyQmSzt9FUeBqu-CNx_ippxr84Ey-jI8Pk8vYrL7FV1WItUG91AItt8roXGC1QBRvapwnXosL7kLe9tzs13Psc1L8_D273fjmIUjCiwv5a9qF1A3Ujr-CxbAooCcZYiS5aQvgowHjaTbRUSRTh_Q_yBeGW16Vn63LXu0dZNeY9zaromwdezLeP7-MJunW_CSwmGIHFi0qPgB7IkTmOvtqVFko0x-nUu7j9Tn9Zb04Wy7QbVZ4jRw1fiQI5zssBdRukOMhtkQJdVKZ4V8ECmqE-V_6iqAo7jXoG_oh6SSBOepeuZzEha6mLuGBzoqEdWmHC8HjRyKVu9cZcQQ0MSF7lOEMc3xhvxqA=w1112-h1481-no", temperature: "36.2",  key: "2" }
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Records</Text> 
        <FlatList
          keyExtractor={(item) => item.key}
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.item}>
            <View>
            <Image source = {{uri: item.image}} style={styles.Image}></Image>
            <Text>{item.timestamp}</Text>
            </View>
            <View style={{flex: 1, justifyContent: "flex-end" }}>
            <Text style={styles.title}> {item.title} </Text>
            <Text style={styles.Temperature}> {item.temperature} </Text>
            </View>
            </View> 
          )}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Temperature: {
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'right',
  },
  Image: {
    width:200,
    height:100,
    margin:1,
    borderRadius: 7
  },
  item: {
    justifyContent: "flex-start",
    flexDirection: 'row',
    borderColor: "black",
    borderWidth: 0.5,
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'right',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#000000',
    padding: 20,
  },
});

