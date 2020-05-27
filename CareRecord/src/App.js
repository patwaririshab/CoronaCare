import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import LoginInitialiser from './navigation/LoginInitialiser';
import NavigationTabInitialiser from './navigation/NavigationTabInitialiser';
import {GoogleSignIn} from '@react-native-community/google-signin';
import SplashScreen from 'react-native-splash-screen';

// GoogleSignIn.configure({
//     iosClientId: "109484316758-i49r5g01u99t6l738vncov3p00c7bne2.apps.googleusercontent.com",
//   })

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return <LoginInitialiser />;
  }

  return <NavigationTabInitialiser />;
}
