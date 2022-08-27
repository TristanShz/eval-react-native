/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import {STYLES} from './utils/styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Category from './screens/Category';
import Courses from './screens/Courses';
import Course from './screens/Course';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={STYLES.background}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Accueil'}
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Catégories'}
            component={Category}
            options={{headerShown: true, headerTransparent: true}}
          />
          <Stack.Screen
            name={'Liste des cours'}
            component={Courses}
            options={{headerShown: true, headerTransparent: true}}
          />
          <Stack.Screen
            name={'Cours'}
            component={Course}
            options={{headerShown: true, headerTransparent: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
