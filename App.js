import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [percentual, setPercentual] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    if (!nome || !valor || !percentual) {
      return;
    }

    const valorOriginal = parseFloat(valor);
    const aumento = (valorOriginal * parseFloat(percentual)) / 100;
    const novoValor = valorOriginal + aumento;

    setResultado({
      nome,
      valorOriginal,
      percentual,
      aumento,
      novoValor,
    });
  };

  return (
    <View style={styles.container}>
      
      <Image source={require("./src/img/calc.png")} style={styles.imagem} />

      
      <Text style={styles.textoIndi}>Nome do Produto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.textoIndi}>Valor Original:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Text style={styles.textoIndi}>Percentual de Aumento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o percentual"
        keyboardType="numeric"
        value={percentual}
        onChangeText={setPercentual}
      />

      
      <Button title="Calcular" onPress={calcular} color="#69bfdb" />

      
      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.textoPagResult}>Produto: {resultado.nome}</Text>
          <Text style={styles.textoPagResult}>Valor Original: R$ {resultado.valorOriginal.toFixed(2)}</Text>
          <Text style={styles.textoPagResult}>Aumento: {resultado.percentual}%</Text>
          <Text style={styles.textoPagResult}>Valor do Aumento: R$ {resultado.aumento.toFixed(2)}</Text>
          <Text style={styles.textoResultado}>Novo Valor: R$ {resultado.novoValor.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc8686",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  textoIndi: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#69bfdb",
    padding: 10,
    marginBottom: 7,
    borderRadius: 7,
    backgroundColor: "#fff",
  },
  resultadoContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "80%",
    alignItems: "center",
  },
  textoPagResult: {
    fontSize: 18,
    color: "#000",
    marginBottom: 5,
  },
  textoResultado: {
    fontSize: 22,
    color: "green",
    marginTop: 10,
  },
});
