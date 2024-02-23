import React, {useEffect, useState} from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Home from "./pages/Home";
import Club from "./pages/Club";
import Stories from "./pages/Stories";
import Clubmap from "./pages/Clubmap";
import Cycling from "./pages/Cycling";
import Congratulation from "./pages/Congratulation";
import Resault from "./pages/Resault";
import Unboarding from "./pages/Unboarding";
import Weight from "./pages/Weight";
import Height from "./pages/Height";
import Name from "./pages/Name";
import Challenges from "./pages/Challenges";
import Today from "./pages/Today";
import Workout from "./pages/Workout";
import Profile from "./pages/Profile";
import NavigationTab from "./components/NavigationTab";

enableScreens();
const UnboardingStack = createStackNavigator();

function Unboardingnavigator() {
  return (
    <UnboardingStack.Navigator headerMode="none" initialRouteName="Unboarding">
      <UnboardingStack.Screen name="Unboarding" component={Unboarding} />
      <UnboardingStack.Screen name="Name" component={Name} />
      <UnboardingStack.Screen name="Weight" component={Weight} />
      <UnboardingStack.Screen name="Height" component={Height} />
    </UnboardingStack.Navigator>
  );
}
const ClubStack = createStackNavigator();

function Clubnavigator() {
  return (
    <ClubStack.Navigator headerMode="none" initialRouteName="Clubmap">
      <ClubStack.Screen name="Stories" component={Stories} />
      <ClubStack.Screen name="Clubmap" component={Clubmap} />
      <ClubStack.Screen name="Cycling" component={Cycling} />
      <ClubStack.Screen name="Congratulation" component={Congratulation} />
      <ClubStack.Screen name="Resault" component={Resault} />
    </ClubStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function Homenavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      headerMode="none"
      tabBar={(props) => <NavigationTab {...props} />}
      backBehavior="order"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          icon: require("./assets/icons/nav1.png"),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Club"
        component={Club}
        options={{ icon: require("./assets/icons/nav2.png") }}
      />
      <Tab.Screen
        name="Challenges"
        component={Challenges}
        options={{ icon: require("./assets/icons/nav3.png") }}
      />

      <Tab.Screen
        name="Today"
        component={Today}
        options={{ icon: require("./assets/icons/nav4.png") }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Gilroy-Light": {
        uri: require("./assets/font/Gilroy-Light.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Gilroy-Lightitalic": {
        uri: require("./assets/font/Gilroy-LightItalic.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Gilroy-ExtraBold": {
        uri: require("./assets/font/Gilroy-ExtraBold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Gilroy-Bold": {
        uri: require("./assets/font/Gilroy-Bold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Gilroy-SemiBold": {
        uri: require("./assets/font/Gilroy-SemiBold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Gilroy-Regular": {
        uri: require("./assets/font/Gilroy-Regular.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Gilroy-Black": {
        uri: require("./assets/font/Gilroy-Black.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Gilroy-Medium": {
        uri: require("./assets/font/Gilroy-Medium.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer theme={{ colors: { background: "#1A1735" } }}>
          <Stack.Navigator initialRouteName="Unboardingnav" headerMode="none">
            <Stack.Screen name="Unboardingnav" component={Unboardingnavigator} />
            <Stack.Screen name="Home" component={Homenavigator} />
            <Stack.Screen name="Clubnav" component={Clubnavigator} />
            <Stack.Screen name="Workout" component={Workout} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  } else {
    return <AppLoading />;
  }
};

export default App;