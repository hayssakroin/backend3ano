import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image"
import { Ionicons } from "@expo/vector-icons"

// npm install expo-image (usar este código no terminal)

const foto = require("../assets/images/chiquinho.webp")

export default function Index() {
  return (
    <View style={styles.container} >
      <View style = {styles.containerImg}>
        <Image source = {foto} style={styles.estiloFoto}></Image>
      </View>
      <View style = {styles.containerConteudo}>
        <View style = {styles.containerNome}>
          <Text style={styles.nome}>Hayssa Linda</Text>
        </View>
        <Text style = {styles.linha}>
          _______________________________________
        </Text>
        <View style = {styles.containerDados}>
          <Ionicons name="person" size={24} color="white" />
          <Text style = {styles.textoDados}>17 anos</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="mail" size={24} color="white" />
          <Text style = {styles.textoDados}>hayssa.linda@escola.pr.gov.br</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="call" size={24} color="white" />
          <Text style = {styles.textoDados}>(42) 9728-7826</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="home" size={24} color="white" />
          <Text style = {styles.textoDados}>Campo Largo / PR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
  },
  estiloFoto: {
    width: 300,
    height: 300,
  },
  containerConteudo: {
    flex: 1
  },
  containerNome:{
    alignItems:"center",
  },
  nome: {
    fontSize: 40,
    color: "pink",
    fontWeight: "bold",
  },
  linha:{
    color: "white",
    fontSize: 20,
    marginBottom: 20
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "pink",
    fontSize: 24,
  }
})