import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RotasStack from './RotasStack';

import Colecao from '../views/Colecao';
import Item from '../views/Item';
import Perfil from '../views/Perfil';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicial" component={RotasStack}/>
      <Drawer.Screen name="Colecao" component={Colecao}/>
      <Drawer.Screen name="Item" component={Item}/>
      <Drawer.Screen name="Perfil" component={Perfil}/>
    </Drawer.Navigator>
  );
}

export default RotasDrawer;
