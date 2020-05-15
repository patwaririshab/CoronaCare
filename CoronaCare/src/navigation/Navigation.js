/* eslint-disable prettier/prettier */
import App from '../App'
import {Navigation} from 'react-native-navigation'
import HomeScreen from '../screens/HomeScreen'
import RecordsScreen from '../screens/RecordsScreen'
import LoginScreen from '../screens/LoginScreen'
import AfterLogin from '../screens/AfterLogin'
import CameraScreen from '../screens/CameraScreen'
import NavigationTabInitialiser from './NavigationTabInitialiser'
import TempConfirmation from '../screens/TempConfirmation'
import SignUpScreen from '../screens/SignUpScreen'
import WebViewScreen from '../screens/WebViewScreen'

export function registerScreens(){
    Navigation.registerComponent(`navigation.CoronaCare.App`, () => App)
    Navigation.registerComponent(`navigation.CoronaCare.NavigationTabInitialiser`, () => NavigationTabInitialiser);
    Navigation.registerComponent(`navigation.CoronaCare.HomeScreen`, () => HomeScreen);
    Navigation.registerComponent(`navigation.CoronaCare.RecordsScreen`, () => RecordsScreen);
    Navigation.registerComponent(`navigation.CoronaCare.LoginScreen`, () => LoginScreen);
    Navigation.registerComponent(`navigation.CoronaCare.AfterLogin`, () => AfterLogin);
    Navigation.registerComponent(`navigation.CoronaCare.CameraScreen`, () => CameraScreen);
    Navigation.registerComponent(`navigation.CoronaCare.TempConfirmation`, () => TempConfirmation);
    Navigation.registerComponent(`navigation.CoronaCare.SignUpScreen`,() => SignUpScreen);
    Navigation.registerComponent(`navigation.CoronaCare.WebViewScreen`,() => WebViewScreen);
}
