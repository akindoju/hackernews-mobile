import About from "../screens/About";
import Homepage from "../screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Home = createDrawerNavigator();

const HomepageNavigator = () => {
  return (
    <NavigationContainer>
      <Home.Navigator>
        <Home.Screen name="Homepage" component={Homepage} />
        <Home.Screen name="About" component={About} />
      </Home.Navigator>
    </NavigationContainer>
  );
};

export default HomepageNavigator;
