import { StyleSheet, Dimensions } from "react-native"
import {
  AMARELO
} from '../../../../styles/styles'

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
  }
})

export default estilo