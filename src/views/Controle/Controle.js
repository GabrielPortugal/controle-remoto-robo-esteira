import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Botao from './components/Botao/Botao'

import estilo from './estilo'
import act from './actions'

const Controle = () => {
  const navigation = useNavigation()

  const cima = require('../../assets/setas/cima.png')
  const baixo = require('../../assets/setas/baixo.png')
  const esquerda = require('../../assets/setas/esquerda.png')
  const direita = require('../../assets/setas/direita.png')
  const parar = require('../../assets/setas/parar.png')
  const cabeca = require('../../assets/robo/cabeca.png')

  return (
    <View style={estilo.container}>
      <View style={estilo.linha}>
        <Botao>
          <Image source={cabeca} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao onPress={() => console.warn('ola')}>
          <Image source={cima} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao></Botao>
      </View>
      <View style={estilo.linha}>
        <Botao>
          <Image source={esquerda} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao>
        <Image source={parar} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao>
          <Image source={direita} style={estilo.imagemSeta}></Image>
        </Botao>
      </View>
      <View style={estilo.linha}>
        <Botao></Botao>
        <Botao>
          <Image source={baixo} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao></Botao>
      </View>
    </View>
  )
}

export default Controle