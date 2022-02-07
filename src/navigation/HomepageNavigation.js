import About from "../screens/About";
import Homepage from "../screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import WebViewScreen from "../screens/WebView";
import { logout } from "../redux/user/user.actions";
import { useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { CustomDrawerContent } from "../components/CustomDrawerContent";

const Home = createDrawerNavigator();

const HomepageNavigator = () => {
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Home.Navigator
        screenOptions={{
          headerBackgroundContainerStyle: {},
          drawerStyle: {
            backgroundColor: "#eee",
            justifyContent: "space-between",
          },
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "lexendDecaBold", fontSize: 25 },
          headerTintColor: "white",
          drawerLabelStyle: {
            color: Colors.primary,
            fontSize: 20,
            fontFamily: "lexendDeca",
          },
        }}
        drawerContent={(props) => (
          <CustomDrawerContent {...props} logout={() => dispatch(logout())} />
        )}
      >
        <Home.Screen
          name="Home"
          component={WebViewNavigator}
          options={{
            title: "Hacker Gist",
            drawerActiveBackgroundColor: "rgba(255, 102, 0,0.2)",
          }}
        />
        <Home.Screen
          name="About"
          component={About}
          options={{
            title: "About",
            drawerActiveBackgroundColor: "rgba(255, 102, 0,0.2)",
          }}
        />
      </Home.Navigator>
    </NavigationContainer>
  );
};

const Web = createStackNavigator();

const WebViewNavigator = () => {
  return (
    <Web.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Web.Screen name="Homepage" component={Homepage} />
      <Web.Screen name="WebViewScreen" component={WebViewScreen} />
    </Web.Navigator>
  );
};

const styles = StyleSheet.create({
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
});

export default HomepageNavigator;
