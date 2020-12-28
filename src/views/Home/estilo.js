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
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: AMARELO,
  },
  containerVideo: {
    height: 170,
    width: (largura - 24),
    backgroundColor: CINZA_ESCURO,
    borderWidth: 4,
    borderColor: CINZA_CLARO,
    borderRadius: 4,
    elevation: 4
  },
  video: {
    height: 200,
    width: (largura - 24),
    backgroundColor: AZUL,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerTexto: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  estiloTexto: {
    width: '80%',
    maxWidth: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: AMARELO_ESCURO,
    elevation: 4
  },
  textoBranco: {
    fontSize: 18,
    color: AMARELO_ESCURO
  },

  containerAcoes: {},

  containerControle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default estilo