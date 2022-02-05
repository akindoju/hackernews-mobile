import Login from "../screens/Login";
import Register from "../screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="Register" component={Register} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
