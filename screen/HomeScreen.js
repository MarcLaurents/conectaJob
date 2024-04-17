import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Image, Button, Modal } from 'react-native'

import LoginInput from '../components/LoginInput'
import RegisterInput from '../components/RegisterInput'

export default function LoginPage() {
  const [modalLoginIsVisible, setModalLoginIsVisible] = useState(false)
  const [modalRegisterIsVisible, setModalRegisterIsVisible] = useState(false)

  function startLoginHandler() {
    setModalLoginIsVisible(true)
  }

  function endLoginHandler() {
    setModalLoginIsVisible(false)
  }

  function startRegisterHandler() {
    setModalRegisterIsVisible(true)
  }

  function endRegisterHandler() {
    setModalRegisterIsVisible(false)
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Image
          style={styles.logoContainer}
          source={require('../assets/Screenshot 2024-04-16 205941.jpg')}
        ></Image>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsStyles}>
          <Button title="Entrar" onPress={startLoginHandler}></Button>
          <LoginInput
            onLogin={startLoginHandler}
            visible={modalLoginIsVisible}
            onCancel={endLoginHandler}
          />
        </View>
        <View style={styles.buttonsStyles}>
          <Button title="Registrar" onPress={startRegisterHandler}></Button>
          <RegisterInput
            onLogin={startRegisterHandler}
            visible={modalRegisterIsVisible}
            onCancel={endRegisterHandler}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: '#111111'
  },
  buttonsContainer: {
    marginTop: 310
  },
  buttonsStyles: {
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: '#97c5b4',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 12,
    marginBottom: 10,
    color: '#76b39d'
  },
  logoContainer: {
    width: '100%',
    height: 300
  }
})
