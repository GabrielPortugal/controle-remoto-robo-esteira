import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './estilo'

export const Botao = ({ titulo, onPress, estilo, big }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[
        styles.botaoContainer,
        estilo ? styles[estilo] : styles.verde,]}
      >
        <Text style={[
          styles.botaoTexto,
          big ? styles.fonteBig : null]}
        >
          {titulo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
