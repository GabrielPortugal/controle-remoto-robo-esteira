const url = 'https://d6-robo.herokuapp.com'

const acordarServidor = async () => {
  const cabecalhoHTTP = {
    method: 'POST',
    // body: JSON.stringify({
    //     userName: usuario,
    //     password: senha
    // }),
    headers: {
      'Content-type': 'application/json'
    }
  }
  const resposta = await fetch(`${url}/acordar`, cabecalhoHTTP)
  if (resposta.ok) {
    return true
  }
  return false
  throw new Error('Não foi possível acordar')
}

export { acordarServidor }