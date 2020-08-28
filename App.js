import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RotasLoginStack from './src/components/RotasLogin';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#081a31" />

      <RotasLoginStack />
      
    </NavigationContainer>
  );
}
