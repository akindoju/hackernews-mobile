import About from "../screens/About";
import Homepage from "../screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import WebViewScreen from "../screens/WebView";
import { logout } from "../redux/user/user.actions";
import { useDispatch } from "react-redux";
import { Button, View, StyleSheet, Image, Text } from "react-native";
import { Colors } from "../constants/Colors";
import { CustomDrawerContent } from "../components/CustomDrawerContent";

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
            backgroundColor: "#eee",
            justifyContent: "space-between",
          },
          title: "Hacker News",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "lexendDecaBold", fontSize: 25 },
          headerTintColor: "white",
        }}
        drawerContent={(props) => (
          <CustomDrawerContent {...props} logout={() => dispatch(logout())} />
        )}
      >
        <Home.Screen name="Homepage" component={WebViewNavigator} />
        <Home.Screen name="About" component={About} />
      </Home.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  headerTitle: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
  },

  image: {
    height: 100,
    width: 100,
  },

  // headerTitleText: {
  //   color: "white",
  //   fontFamily: "lexendDeca",
  //   fontSize: 25,
  // },
});

export default HomepageNavigator;
