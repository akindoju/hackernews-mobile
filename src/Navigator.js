import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import About from "./screens/About";
import Homepage from "./screens/Homepage";

const stackNavigator = createStackNavigator({
  Homepage: Homepage,
  AboutPage: About,
});

const MainNavigator = createDrawerNavigator(
  {
    Homepage: {
      screen: stackNavigator,
      navigationOptions: {
        drawerLabel: "Home",
      },
    },
    AboutPage: {
      screen: About,
      navigationOptions: {
        drawerLabel: "About",
      },
    },
  }
  // {
  //   contentOptions: {
  //     activeTintColor: Colors.accentColor,
  //     labelStyle: {
  //       fontFamily: 'open-sans-bold'
  //     }
  //   }
  // }
);

export default createAppContainer(MainNavigator);
