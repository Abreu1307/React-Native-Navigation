import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from '../views/Inicial';
import Colecao from '../views/Colecao';
import Item from '../views/Item';

const Stack = createStackNavigator();

const RotasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Inicial" 
        component={Inicial} 
        options={{
          cardStyle: styles.screenInicial,
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Colecao" 
        component={Colecao} 
        options={{
          cardStyle: styles.screenColecao,
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Item" 
        component={Item} 
        options={{
          cardStyle: styles.screenItem,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RotasStack;

const styles = StyleSheet.create({
  screenInicial: {
    backgroundColor: "#92afd7",
  },
  screenColecao: {
    backgroundColor: "#d0f4ea",
  },
  screenItem: {
    backgroundColor: "#d1d1d1",
  },
});