import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages';
import ConfirmePresenca from './src/pages/formPresenca';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Home' component={Home}  options={{ headerShown:false }}/>
        <Stack.Screen name='ConfirmePresenca' component={ConfirmePresenca} options={{ headerShown:false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}