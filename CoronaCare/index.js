import { Navigation } from "react-native-navigation";
import  {registerScreens}  from "./src/navigation/Navigation"
import "./src/navigation/Navigation"

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.CoronaCare.WelcomeScreen"
      }
    }
  });
});
