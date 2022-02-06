import About from "../screens/About";
import Homepage from "../screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import WebViewScreen from "../screens/WebView";

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
  return (
    <NavigationContainer>
      <Home.Navigator>
        <Home.Screen name="Homepage" component={WebViewNavigator} />
        <Home.Screen name="About" component={About} />
      </Home.Navigator>
    </NavigationContainer>
  );
};

export default HomepageNavigator;
