import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { WebView } from 'react-native-webview';

import Controle from '../Controle/Controle'

import estilo from './estilo'

const Home = () => {
  const navigation = useNavigation()

  const htmlVideo = `<div style="background-color: #333;display: flex;
  justify-content: center;align-content: center;">
  <img src="http://10.0.0.140:8080/?action=stream" style="transform: rotate(180deg);"/>
  </div>`

  return (
    <View style={estilo.container}>
      <View style={estilo.containerVideo}>
        <WebView source={{ html: htmlVideo }} />
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