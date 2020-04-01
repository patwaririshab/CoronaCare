import React from 'react'
import { View, Text } from "react-native"
import {Navigation} from "react-native-navigation"

const App = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: 'navigation.CoronaCare.HomeScreen',
                passProps: {
                  text: 'This is tab 1'
                }
              }
            }],
            options: {
              bottomTab: {
                text: 'Take Temperature',
                icon: require('./assets/images/thermometer.png'),
                testID: 'FIRST_TAB_BAR_BUTTON'
              }
            }
          }
        },
        {
          component: {
            name: 'navigation.CoronaCare.HomeScreen',
            passProps: {
              text: 'This is tab 2'
            },
            options: {
              bottomTab: {
                text: 'Tab 2',
                icon: require('./assets/images/thermometer.png'),
                testID: 'SECOND_TAB_BAR_BUTTON'
              }
            }
          }
        }]
      }
    }
  });

  return(<></>)
}  

export default App

