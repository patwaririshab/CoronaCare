import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import LoginScreen from './screens/LoginScreen';
import NavigationTabInitialiser from './navigation/NavigationTabInitialiser';
import {GoogleSignIn} from '@react-native-community/google-signin';

// GoogleSignIn.configure({
//     iosClientId: "109484316758-i49r5g01u99t6l738vncov3p00c7bne2.apps.googleusercontent.com",
//   })

export default function App() {
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
    return <LoginScreen />;
  }

  return <NavigationTabInitialiser />;
}