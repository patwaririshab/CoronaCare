import App from '../App'
import {Navigation} from 'react-native-navigation'



const registerScreens = () => {
    Navigation.registerComponent(`navigation.playground.HomeScreen`, () => App);
}

export default registerScreens

