import React, { useState, useEffect } from 'react'
import { View, Image, ToastAndroid } from 'react-native'

import Botao from './components/Botao/Botao'

import estilo from './estilo'
import act from './actions'

const Controle = () => {
  useEffect(() => setExibirToast(false), [estExibirToast]);

  const cima = require('../../assets/setas/cima.png')
  const baixo = require('../../assets/setas/baixo.png')
  const esquerda = require('../../assets/setas/esquerda.png')
  const direita = require('../../assets/setas/direita.png')
  const parar = require('../../assets/setas/parar.png')
  const cabeca = require('../../assets/robo/cabeca.png')

  const [estExibirToast, setExibirToast] = useState(false)
  const [estMsgToast, setMsgToast] = useState('')
  const Toast = ({ visible, message }) => {
    if (visible) {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        50
      );
    }
    return null;
  }
  const toastExibir = (msg) => {
    setExibirToast(true)
    setMsgToast(msg)
  }

  const pressBtn = async (index) => {
    /*
      o código abaixo envia o comando para o servidor
    */
    // let msg = await act.sendComando({ comando: index }, index)
    // toastExibir(msg)
    /*
      o código abaixo simula a resposta do servidor
      caso coloque a comunicação pelo servidor, remover o código abaixo
    */
    switch (index) {
      case 1: toastExibir('Para cima'); return
      case 2: toastExibir('Para esquerda'); return
      case 3: toastExibir('Mover cabeça'); return
      case 4: toastExibir('Para direita'); return
      case 5: toastExibir('Para trás'); return
      case 6: toastExibir('Parar tudo'); return
    }
  }

  return (
    <View style={estilo.container}>
      <Toast visible={estExibirToast} message={estMsgToast} />

      <View style={estilo.linha}>
        <Botao onPress={() => pressBtn(3)}>
          <Image source={cabeca} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao onPress={() => pressBtn(1)}>
          <Image source={cima} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao></Botao>
      </View>
      <View style={estilo.linha}>
        <Botao onPress={() => pressBtn(2)}>
          <Image source={esquerda} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao onPress={() => pressBtn(6)}>
          <Image source={parar} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao onPress={() => pressBtn(4)}>
          <Image source={direita} style={estilo.imagemSeta}></Image>
        </Botao>
      </View>
      <View style={estilo.linha}>
        <Botao></Botao>
        <Botao onPress={() => pressBtn(5)}>
          <Image source={baixo} style={estilo.imagemSeta}></Image>
        </Botao>
        <Botao></Botao>
      </View>
    </View>
  )
}

export default Controle