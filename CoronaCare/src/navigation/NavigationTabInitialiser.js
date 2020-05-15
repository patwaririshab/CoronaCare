/* eslint-disable prettier/prettier */
import React from 'react';
import {Navigation} from 'react-native-navigation';

const NavigationTabInitialiser = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            titleDisplayMode: "alwaysShow",
            barStyle: "default"
          }
        },
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
                      topBar: {visible: false }
                    }
                  },
                }],
                options: {
                    topBar: { visible: false},
                    bottomTab: {
                        text: 'Capture',
                        icon: require('../assets/images/outline_camera_alt_black_18dp.png'),
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
                  icon: require('../assets/images/thermometer_PNG28.png'),
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
