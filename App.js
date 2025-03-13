import { useState, useMemo } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [erro, setErro] = useState('');

  const resultado = useMemo(() => {
    const valorNum = Number(valor);
    const percentual = Number(porcentagem);

    if (!valor || !porcentagem || isNaN(valorNum) || isNaN(percentual)) {
      return null;
    }

    return valorNum + (valorNum * percentual) / 100;
  }, [valor, porcentagem]);

  const calcular = () => {
    if (!valor || !porcentagem) {
      setErro('Insira valores validos em ambos os espaços');
    } else {
      setErro('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo do Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={(text) => {
          setValor(text);
          setErro('');
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a porcentagem"
        keyboardType="numeric"
        value={porcentagem}
        onChangeText={(text) => {
          setPorcentagem(text);
          setErro('');
        }}
      />

      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado.toFixed(2)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBF9CA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0505F5',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#097D09FF',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
