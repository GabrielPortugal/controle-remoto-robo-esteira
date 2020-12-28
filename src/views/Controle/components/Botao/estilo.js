import { StyleSheet, Dimensions } from "react-native"
import {
  AMARELO_ESCURO,
} from '../../../../styles/styles'

const largura = Dimensions.get("screen").width

const estilo = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    margin: 8,
    backgroundColor: AMARELO_ESCURO,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 4
  },
})

export default estilo