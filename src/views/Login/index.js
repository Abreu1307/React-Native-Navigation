import React, { useState } from 'react';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Login = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');


  const entrar = () => {
    if (!login || !senha) {
      Alert.alert(
        'Preenchimento obrigatório',
        'Informe o login e senha',
        [{
          text: 'OK',
        }]
      );

      return;
    }

    navigation.replace('Initial', { login })
  }

  return (
    <View style={styles.container}>
      <View style={styles.borda}>

        <Text style={styles.texto}>Item</Text>

        <TextInput
          style={styles.campo}
          placeholder="Login"
          onChangeText={e => setLogin(e)}
          value={login}
        />

        <TextInput
          style={styles.campo}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={e => setSenha(e)}
          value={senha}
        />

        <TouchableOpacity 
          style={styles.botaoContainer}
          onPress={entrar}
        >
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;