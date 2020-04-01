import App from '../App'
import {Navigation} from 'react-native-navigation'
import HomeScreen from '../screens/HomeScreen'

const registerScreens = () => {
    Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
    Navigation.registerComponent(`navigation.CoronaCare.HomeScreen`, () => HomeScreen)
}

export default registerScreens

