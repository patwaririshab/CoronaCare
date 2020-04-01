import App from '../App'
import {Navigation} from 'react-native-navigation'
import HomeScreen from '../screens/HomeScreen'

export function registerScreens(){
    Navigation.registerComponent(`navigation.CoronaCare.WelcomeScreen`, () => App);
    Navigation.registerComponent(`navigation.CoronaCare.HomeScreen`, () => HomeScreen)
}

