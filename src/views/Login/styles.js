import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borda: {
    backgroundColor: '#081a31',
    width: '80%',
    height: '25%',
    borderRadius: 10,
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  campo: {
    backgroundColor: '#dcedff',
    fontSize: 18,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 5,
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
  },
  botaoContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
    height: 40,
    borderWidth: 2,
    borderColor: '#e8f2e9',
    backgroundColor: '#14417b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold'
 },
});

export default styles;