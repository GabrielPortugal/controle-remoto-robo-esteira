import { enviarComando } from '../../api/enviarComando'

const sendComando = async (payload, index) => {
  const resp = await enviarComando(payload)
  if (resp) {
    switch (index) {
      case 1: return 'Para cima'
      case 2: return 'Para esquerda'
      case 3: return 'Mover cabeça'
      case 4: return 'Para direita'
      case 5: return 'Para trás'
      case 6: return 'Parar tudo'
    }
  }
  else {
    return 'Erro!'
  }
}

export default {
  sendComando
}