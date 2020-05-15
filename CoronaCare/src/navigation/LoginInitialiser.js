import React from 'react';
import {Navigation} from 'react-native-navigation';

const LoginInitialiser = () => {
    Navigation.setRoot({
        root: {
        stack: {
            id: 'LOGIN_STACK',
          children: [{
              component: {
                name: 'navigation.CoronaCare.LoginScreen',
                options: {
                    topBar: {visible: false }
                  }
              },
            }],
        },
    }
    })

    return <></>
}

export default LoginInitialiser