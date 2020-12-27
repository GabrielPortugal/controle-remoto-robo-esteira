import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Controle from '../Controle/Controle'

import { WebView } from 'react-native-webview';

import estilo from './estilo'
import act from './actions'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={estilo.container}>

      <View style={estilo.containerVideo}>
        <WebView
          source={{ uri: 'https://infinite.red' }}
        />
      </View>

      <View style={estilo.containerTexto}>
        <View style={estilo.estiloTexto}>
          <Text style={estilo.textoBranco}>D-6</Text>
        </View>
      </View>

      <View style={estilo.containerAcoes}>
      </View>

      <View style={estilo.containerControle}>
        <Controle></Controle>
      </View>
    </View>
  )
}

export default Home