/* eslint-disable prettier/prettier */
import React from 'react';
import {Navigation} from 'react-native-navigation';

const NavigationTabInitialiser = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
            stack: {
                id: 'AFTERLOGIN_STACK',
              children: [{
                  component: {
                    name: 'navigation.CoronaCare.AfterLogin',
                    passProps: {
                      text: 'This is tab 3',
                    },
                    options: {
                      topBar: {
                        visible: false
                      }
                    }
                  },
                }],
                options: {
                    topBar: { visible: false},
                    bottomTab: {
                        text: 'Capture',
                        icon: require('../assets/images/thermometer.png'),
                        testID: 'THIRD_TAB_BAR_BUTTON',
                    },
                },
            },
          },
          {
            component: {
              name: 'navigation.CoronaCare.RecordsScreen',
              passProps: {
                text: 'This is tab 1',
              },
              options: {
                topBar: { visible: false},
                bottomTab: {
                  text: 'Records',
                  icon: require('../assets/images/thermometer.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
              },
            },
          },
        ],
      },
    },
  });

  return <></>;
};

export default NavigationTabInitialiser;
