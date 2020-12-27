import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Botao } from '../../components/botao/Botao'

import estilo from './estilo'
import act from './actions'
import Loading from './components/loading/Loading'

const Inicial = () => {
  const navigation = useNavigation()

  let [estIsInicial, setIsInicial] = useState(true)
  
  const robo = require('../../assets/robo/robo_olho.png')

  return (
    <>
      { estIsInicial ?
        <View style={estilo.container}>
          <View style={estilo.containerImagem}>
            <Image source={robo} style={estilo.imagem}></Image>
          </View>
          <View style={estilo.containerTextoInfo}>
            <Text style={estilo.textoInfo}>Antes de ligar o D6</Text>
            <Text style={estilo.textoInfo}>ACORDE O SERVIDOR</Text>
          </View>
          <View>
            <Botao titulo={'ACORDAR'} estilo={'roxo'} big
              onPress={() => {
                act.inventerEstIsInicial(estIsInicial, setIsInicial)
                act.acordar(navigation)
              }}></Botao>
          </View>
        </View>
        : <Loading></Loading>}
    </>
  )
}

export default Inicial