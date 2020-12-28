import { StyleSheet, Dimensions } from "react-native"
import {
  AMARELO,
  BRANCO
} from '../../styles/styles'

const largura = Dimensions.get("screen").width

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: AMARELO,
  },
  imagem: {
    width: 180,
    resizeMode: "contain"
  },
  textoBranco: {
    color: BRANCO
  },
  containerTextoInfo: {
    marginVertical: 20
  },
  textoInfo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 4
  },

  animacao: {
    backgroundColor: 'red'
  }
})

export default estilo