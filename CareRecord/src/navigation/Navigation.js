/* eslint-disable prettier/prettier */
import App from '../App';
import {Navigation} from 'react-native-navigation';
import HomeScreen from '../screens/HomeScreen';
import RecordsScreen from '../screens/RecordsScreen';
import LoginScreen from '../screens/LoginScreen';
import AfterLogin from '../screens/AfterLogin';
import CameraScreen from '../screens/CameraScreen';
import NavigationTabInitialiser from './NavigationTabInitialiser';
import TempConfirmation from '../screens/TempConfirmation';
import SignUpScreen from '../screens/SignUpScreen';
import WebViewScreen from '../screens/WebViewScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import OrganizationUrlScreen from '../screens/OrganizationUrlScreen';

export function registerScreens(){
    Navigation.registerComponent('navigation.CareRecord.App', () => App);
    Navigation.registerComponent('navigation.CareRecord.NavigationTabInitialiser', () => NavigationTabInitialiser);
    Navigation.registerComponent('navigation.CareRecord.HomeScreen', () => HomeScreen);
    Navigation.registerComponent('navigation.CareRecord.RecordsScreen', () => RecordsScreen);
    Navigation.registerComponent('navigation.CareRecord.LoginScreen', () => LoginScreen);
    Navigation.registerComponent('navigation.CareRecord.AfterLogin', () => AfterLogin);
    Navigation.registerComponent('navigation.CareRecord.CameraScreen', () => CameraScreen);
    Navigation.registerComponent('navigation.CareRecord.TempConfirmation', () => TempConfirmation);
    Navigation.registerComponent('navigation.CareRecord.SignUpScreen',() => SignUpScreen);
    Navigation.registerComponent('navigation.CareRecord.WebViewScreen',() => WebViewScreen);
    Navigation.registerComponent('navigation.CareRecord.SettingsScreen',() => SettingsScreen);
    Navigation.registerComponent('navigation.CareRecord.ChangePasswordScreen', () => ChangePasswordScreen);
    Navigation.registerComponent('navigation.CareRecord.ResetPasswordScreen', () => ResetPasswordScreen);
    Navigation.registerComponent('navigation.CareRecord.OrganizationUrlScreen', () => OrganizationUrlScreen);
}
