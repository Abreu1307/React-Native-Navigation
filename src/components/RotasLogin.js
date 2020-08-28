import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/Login';
import RotasTab from './RotasTab';

const Stack = createStackNavigator();

const RotasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          cardStyle: styles.screenLogin,
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Initial" 
        component={RotasTab}
        options={{
          cardStyle: styles.screenColecao,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RotasStack;

const styles = StyleSheet.create({
  screenLogin: {
    backgroundColor: "#000",
  },
  screenColecao: {
    backgroundColor: "#d0f4ea",
  },
});