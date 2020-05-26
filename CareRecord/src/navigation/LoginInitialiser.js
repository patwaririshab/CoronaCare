import React from 'react';
import {Navigation} from 'react-native-navigation';

const LoginInitialiser = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'LOGIN_STACK',
        children: [
          {
            component: {
              name: 'navigation.CareRecord.LoginScreen',
              options: {
                topBar: {visible: false},
                statusBar: {visible: false}
              },
            },
          },
        ],
      },
    },
  });

  return <></>;
};

export default LoginInitialiser;
