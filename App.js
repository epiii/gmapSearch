import React from 'react';
import {
  StyleSheet
} from 'react-native';
import MapScreen from "./src/screens/MapScreen";
import SearchScreen from './src/screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MapScreen'
            component={MapScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='SearchScreen'
            component={SearchScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
