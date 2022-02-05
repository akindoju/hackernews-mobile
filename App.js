import React, { useState } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Homepage from "./src/screens/Homepage";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    lexendDeca: require("./assets/fonts/LexendDeca-Regular.ttf"),
    lexendDecaBold: require("./assets/fonts/LexendDeca-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  // const [fontLoaded, setFontLoaded] = useState(false);

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
      {/* <View style={styles.container}> */}
      {/* <Navigator /> */}
      <Homepage />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <About /> */}
      {/* </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
});
