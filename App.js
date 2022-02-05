import Navigator from "./src/Navigator";
import About from "./src/screens/About";
import { useState } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppLoading from "expo-app-loading";
import Homepage from "./src/screens/Homepage";
import { Text, View, StyleSheet } from "react-native";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

const fetchFonts = () => {
  return Font.loadAsync({
    lexendDeca: require("./assets/fonts/LexendDeca-Regular.ttf"),
    lexendDecaBold: require("./assets/fonts/LexendDeca-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Navigator /> */}
        {/* <Homepage /> */}
        {/* <Login /> */}
        <Register />
        {/* <About /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
});
