import { acordarServidor } from '../../api/acordarServidor'

const inventerEstIsInicial = (estIsInicial, setIsInicial) => {
  setIsInicial(!estIsInicial)
}

const acordar = async (navigation) => {
    const resp = await acordarServidor()
    if(resp) {
      navigation.replace('Home')
      return true
    }
    else {
      return false
    }
}

export default {
  inventerEstIsInicial,
  acordar
}