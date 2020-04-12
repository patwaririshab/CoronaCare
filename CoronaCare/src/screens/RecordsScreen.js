// import React, {Component} from 'react';
// import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { Navigation } from 'react-native-navigation';


// export default class RecordsScreen extends Component {
//   render() {
//     return (
//       <View style={styles.outsideWrapper}>
//         <Text style={styles.welcomeText}>Records</Text>
//         <Button 
//         title="Sign Out"
//         onPress={() => {
//           auth()
//           .signOut()
//           .then(() => console.log('User signed out!'))
//           .then(() => { 
//             Navigation.setRoot({
//             root: {
//               component: {
//                 name: "navigation.CoronaCare.App"
//               }
//             }
//           })})
//         }
//       }/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   outsideWrapper: {
//     backgroundColor: '#FFFFFF',
//     display: 'flex',
//     padding: 30,
//   },
//   welcomeText: {
//     fontWeight: '300',
//     fontSize: 40,
//     color: '#000000',
//   },
// });

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      HeadTable: ['S/N', 'Day', 'AM', 'PM'],
      DataTable: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      
      <View style={styles.container}>
        
        <Table borderStyle={{borderWidth: 1, borderColor: '#000000'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Verdana',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20
  },
  container: { 
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 30,
    alignContent: "center",
    backgroundColor: '#6F7BD9'
  },
  TableText: { 
    margin: 10
  }
});

