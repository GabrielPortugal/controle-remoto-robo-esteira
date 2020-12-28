const url = 'https://d6-robo.herokuapp.com'

const enviarComando = async (payload) => {
  const cabecalhoHTTP = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json'
    }
  }
  const resposta = await fetch(`${url}/receberComando`, cabecalhoHTTP)
  if (resposta.ok) {
    return true
  }
  return false
}

export { enviarComando }