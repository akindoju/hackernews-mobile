import About from "../screens/About";
import Homepage from "../screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import WebViewScreen from "../screens/WebView";
import { logout } from "../redux/user/user.actions";
import { useDispatch } from "react-redux";
import { Button } from "react-native";

const Web = createStackNavigator();

const WebViewNavigator = () => {
  return (
    <Web.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Web.Screen name="Home" component={Homepage} />
      <Web.Screen name="WebViewScreen" component={WebViewScreen} />
    </Web.Navigator>
  );
};

const Home = createDrawerNavigator();

const HomepageNavigator = () => {
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Home.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#c6cbef",
            justifyContent: "center",
          },
        }}
        drawerContent={() => (
          <Button
            title="Sign out"
            onPress={() => {
              dispatch(logout());
            }}
          />
        )}
      >
        <Home.Screen name="Homepage" component={WebViewNavigator} />
        <Home.Screen name="About" component={About} />
      </Home.Navigator>
    </NavigationContainer>
  );
};

export default HomepageNavigator;
