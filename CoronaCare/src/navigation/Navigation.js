import App from '../App'
import {Navigation} from 'react-native-navigation'
import HomeScreen from '../screens/HomeScreen'
import RecordsScreen from '../screens/RecordsScreen'
import LoginScreen from '../screens/LoginScreen'
import AfterLogin from '../screens/AfterLogin'
import CameraScreen from '../screens/CameraScreen'

export function registerScreens(){
    Navigation.registerComponent(`navigation.CoronaCare.WelcomeScreen`, () => App);
    Navigation.registerComponent(`navigation.CoronaCare.HomeScreen`, () => HomeScreen);
    Navigation.registerComponent(`navigation.CoronaCare.RecordsScreen`, () => RecordsScreen);
    Navigation.registerComponent(`navigation.CoronaCare.LoginScreen`, () => LoginScreen);
    Navigation.registerComponent(`navigation.CoronaCare.AfterLogin`, () => AfterLogin);
    Navigation.registerComponent(`navigation.CoronaCare.CameraScreen`, () => CameraScreen)
}
