import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import estilo from './estilo'

const Botao = ({children, onPress}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={estilo.container}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default Botao