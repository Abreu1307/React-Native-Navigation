import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Inicial = () => {
  const navigation = useNavigation();

  const abrirColecao = () => {
    navigation.navigate('Colecao');
  }

  const abrirItem = () => {
    navigation.navigate('Item');
  }

  return (
    <View style={styles.container}>
      <View style={styles.borda}>
        
        <Text style={styles.texto}>Inicial</Text>

        <TouchableOpacity 
          style={styles.botaoContainer}
          onPress={abrirColecao}
        >
          <Text style={styles.botaoTexto}>Coleção</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoContainer}
          onPress={abrirItem}
        >
          <Text style={styles.botaoTexto}>Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Inicial;