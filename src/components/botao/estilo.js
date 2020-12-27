import { StyleSheet } from "react-native"
import {
  AZUL,
  ROXO,
  VERMELHO,
  VERDE,
  BRANCO,
} from '../../styles/styles'

const estilo = StyleSheet.create({
  botaoContainer: {
    paddingVertical: 4,
    paddingHorizontal: 32,
    borderWidth: 4,
    borderColor: BRANCO,
    borderRadius: 8,
  },
  botaoTexto: {
    fontSize: 16,
    color: BRANCO,
    textAlign: 'center',
  },

  fonteBig: {
    fontSize: 20,
    fontWeight: "bold"
  },

  roxo: {
    backgroundColor: ROXO
  },
  verde: {
    backgroundColor: VERDE
  },
  azul: {
    backgroundColor: AZUL
  },
  vermelho: {
    backgroundColor: VERMELHO
  }
})

export default estilo