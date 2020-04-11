import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/navigation/Navigation"

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.CoronaCare.App"
      }
    }
  });
});
