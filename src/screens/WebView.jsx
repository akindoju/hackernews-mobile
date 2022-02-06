import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ActivityIndicator,
  View,
  Alert,
  StyleSheet,
  BackHandler,
} from "react-native";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";

const WebViewScreen = (props) => {
  const [canGoBack, setCanGoBack] = useState(false);
  const webviewRef = useRef(null);

  const onBackPress = useCallback(() => {
    if (!canGoBack) {
      props.navigation.goBack();
      return true;
    }

    if (canGoBack && webviewRef.current) {
      webviewRef.current.goBack();
      return true;
    } else {
      return false;
    }
  }, [canGoBack]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onBackPress);
  }, [onBackPress]);

  const [loading, setLoading] = useState(true);
  const hideSpinner = () => {
    setLoading(false);
  };

  const loadErrorHandler = (event) => {
    Alert.alert(
      "An error occured",
      "Check your network connection and try again",
      [
        {
          style: "default",
          text: "Okay",
          onPress: () => {
            props.navigation.goBack();
          },
        },
      ]
    );
  };

  const storyUrl = useSelector((state) => state.storyItems.storyUrl);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        source={{ uri: storyUrl }}
        // originWhitelist={["https://www.biu.edu.ng"]}
        originWhitelist={["*"]}
        onLoad={hideSpinner}
        onError={loadErrorHandler}
        onLoadStart={() => {
          setLoading(true);
        }}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
        }}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </View>
  );
};

// WebView.navigationOptions = {
//   title: "School fees",
// };

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WebViewScreen;
