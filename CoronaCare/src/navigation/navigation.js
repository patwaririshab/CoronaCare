import App from '../App'
import {Navigation} from 'react-native-navigation'
import HomeScreen from '../screens/HomeScreen'
import RecordsScreen from '../screens/RecordsScreen'

export function registerScreens() {
    Navigation.registerComponent(`navigation.CoronaCare.WelcomeScreen`, () => App);
    Navigation.registerComponent(`navigation.CoronaCare.HomeScreen`, () => HomeScreen);
    Navigation.registerComponent(`navigation.CoronaCare.RecordsScreen`, () => RecordsScreen);   
}
