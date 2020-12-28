import React from 'react'
import { View, Image } from 'react-native'

import Rotacao from '../../../../components/rotacao/Rotacao'

import estilo from './estilo'

const Loading = () => {
  const robo = require('../../../../assets/robo/robo_olho.png')

  return (
    <View style={estilo.container}>
      <Rotacao duracao={3000} loop>
        <Image source={robo} style={estilo.imagem}></Image>
      </Rotacao>
    </View>
  )
}

export default Loading