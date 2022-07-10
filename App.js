import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./src/Categories/Categories";
import Meals from "./src/Meals/Meals";
import Detail from "./src/Detail/Detail";
 

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CategoriesScreen" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
