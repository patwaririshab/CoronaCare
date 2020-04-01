import { Navigation } from "react-native-navigation";
import RegisterScreens from "./src/navigation/Navigation"
import "./src/navigation/Navigation"

RegisterScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
