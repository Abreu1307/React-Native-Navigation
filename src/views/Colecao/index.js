import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Colecao = () => {
  const navigation = useNavigation();

  const voltar = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.borda}>

        <Text style={styles.texto}>Coleção</Text>

        <TouchableOpacity 
          style={styles.botaoContainer}
          onPress={voltar}
        >
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Colecao;