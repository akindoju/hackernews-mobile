import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation-switch";
import About from "./screens/About";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import Register from "./screens/Register";

const StackNavigator = createStackNavigator({
  Homepage: { screen: Homepage },
  // AboutPage: { screen: About },
});

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    Homepage: StackNavigator,
  },
  { headerMode: "none" }
);

// const MainNavigator = createSwitchNavigator({
//   Auth: { screen: AuthNavigator },
//   Homepage: { screen: StackNavigator },
// });

const MainNavigator = createDrawerNavigator(
  {
    Homepage: {
      screen: StackNavigator,
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
    Auth: {
      screen: AuthNavigator,
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
