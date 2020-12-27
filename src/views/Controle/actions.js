import { acordarServidor } from '../../api/acordarServidor'

const onPressInversoAcordar = (estIsInicial, setIsInicial) => {
  setIsInicial(!estIsInicial)
}

const acordar = async (setIsInicial, navigation) => {
    const resp = await acordarServidor()
    if(resp) {
      setIsInicial(true)
      return true
    }
    else {
      return false
    }
}

export default {
  onPressInversoAcordar,
  acordar
}