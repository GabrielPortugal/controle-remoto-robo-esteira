import { URL_SERVIDOR } from '@env';

const enviarComando = async (payload) => {
  const cabecalhoHTTP = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json'
    }
  }
  const resposta = await fetch(`${URL_SERVIDOR}/receberComando`, cabecalhoHTTP)
  if (resposta.ok) {
    return true
  }
  return false
}

export { enviarComando }