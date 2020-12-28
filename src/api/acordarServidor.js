import { URL_SERVIDOR } from '@env';

const acordarServidor = async () => {
  const cabecalhoHTTP = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }
  }
  const resposta = await fetch(`${URL_SERVIDOR}/acordar`, cabecalhoHTTP)
  if (resposta.ok) {
    return true
  }
  return false
  throw new Error('Não foi possível acordar')
}

export { acordarServidor }