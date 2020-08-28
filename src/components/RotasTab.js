import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RotasDrawer from './RotasDrawer';

import Perfil from '../views/Perfil';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 24 },
        style: { backgroundColor: '#14417b' },
        activeTintColor: '#fff',
      }}
    >
      <Tab.Screen name="Inicial" component={RotasDrawer} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default RotasTab;