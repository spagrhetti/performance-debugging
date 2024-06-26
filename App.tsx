import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import BigStateVars from "./components/BigStateVars";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PageA" detachInactiveScreens={true}>
        <Stack.Screen
          name="PageA"
          component={PageA}
          options={{ detachPreviousScreen: true }}
        />
        <Stack.Screen
          name="PageB"
          component={PageB}
          options={{ detachPreviousScreen: true }}
        />
        <Stack.Screen name="BigStateVars" component={BigStateVars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
