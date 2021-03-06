import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import loginReducer from "./redux/reducer/login";

import AppNavigator from "./navigation/AppNavigator";

import postsReducer from "./redux/reducer/posts";
//import firebase from "firebase";
//import { firebaseConfig } from "./firebaseConfig";
//firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  posts: postsReducer
});
let store = createStore(rootReducer);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "ostrich-regular": require("./assets/fonts/ostrich-regular.ttf"),
      "fff-regular": require("./assets/fonts/FFF_Tusj.ttf"),
      bestlovers: require("./assets/fonts/Bestlovers.ttf"),
      stardust: require("./assets/fonts/StardustAdventure.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
