/*
 * ROTACAO
 * DEV: GABRIEL PORTUGAL
 * 26/12/2020
 * COMPONENTE PARA RODAR UM COMPONENTE EM SEU PRÓRPIO EIXO
 * 
 * PARAMETROS
 * children (component) = componente que ficará rodando
 * duracao (number) = tempo que demorará para rodar 360deg, default = 1000
 * loop (boolean) = parametro que define se animação ficará em loop ou não, default = false
 * tipo (string) = tipo de animação, podendo ser timing ou spring, default = timing
*/
import React from 'react'
import { Animated, Easing } from 'react-native'

const Rotacao = ({ children, duracao = 1000, loop, tipo = 'timing' }) => {
  const animacaoRotacao = new Animated.Value(0)
  const dataRotacao = animacaoRotacao.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  Animated[tipo](animacaoRotacao, {
    toValue: 1,
    duration: duracao,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start(() => {
    if (loop) startAnimacaoRotacao()
  })

  const startAnimacaoRotacao = () => {
    animacaoRotacao.setValue(0);
    Animated[tipo](animacaoRotacao, {
      toValue: 1,
      duration: duracao,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startAnimacaoRotacao())
  };

  return (
    <Animated.View style={{ transform: [{ rotate: dataRotacao }] }}>
      {children}
    </Animated.View>
  )
}

export default Rotacao