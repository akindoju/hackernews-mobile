import * as Font from "expo-font";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { init } from "./src/helpers/database";
import MainNavigator from "./src/navigation/MainNavigator";

init();

const fetchFonts = () => {
  return Font.loadAsync({
    lexendDeca: require("./assets/fonts/LexendDeca-Regular.ttf"),
    lexendDecaBold: require("./assets/fonts/LexendDeca-Bold.ttf"),
  });
};

const App = () => {
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
      <MainNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default App;
