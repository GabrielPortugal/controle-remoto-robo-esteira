import { StyleSheet, Dimensions } from "react-native"
import {
  AZUL,
  CINZA_CLARO,
  CINZA,
  CINZA_MENOS_ESCURO,
  CINZA_ESCURO,
  AMARELO,
  AMARELO_ESCURO,
  ROXO,
  VERMELHO,
  VERDE,
  FUNDO,
  BRANCO,
  PRETO
} from '../../styles/styles'

const largura = Dimensions.get("screen").width

const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 2,
    borderColor: AMARELO_ESCURO,
    elevation: 4
  },
  linha: {
    flexDirection: 'row',
  },
  imagemSeta: {
    width: 42,
    height: 42,
    resizeMode: "contain"
  }
})

export default estilo