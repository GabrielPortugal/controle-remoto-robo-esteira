import { acordarServidor } from '../../api/acordarServidor'

const inventerEstIsInicial = (estIsInicial, setIsInicial) => {
  setIsInicial(!estIsInicial)
}

const acordar = async (navigation) => {
    /*
      Descomentar o código abaixo para poder pegar as informações do servidor
      obs: há a necessidade de fazer com que o servidor acorde pelo motivo
      que o servidor foi hospedado na Heroku, e quando não está sendo
      utilizado o servidor entra em estado de  'sleep'
    */
    // const resp = await acordarServidor()
    // if(resp) {
    //   navigation.replace('Home')
    //   return true
    // }
    // else {
    //   return false
    // }

    /*
      o código abaixo serve para simular o tempo de resposta do servidor
    */
   setTimeout(()=>{
    navigation.replace('Home')
     return true
   }, 2500)
}

export default {
  inventerEstIsInicial,
  acordar
}