import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

function RegisterInput(props) {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')

  function emailInputHandler(email) {
    setEnteredEmail(email)
  }

  function passwordInputHandler(password) {
    setEnteredPassword(password)
  }

  function passwordConfirmInputHandler(confirmPassword) {
    setEnteredConfirmPassword(confirmPassword)
  }

  function loginHandler() {
    props.onLogin(enteredEmail, enteredPassword, enteredConfirmPassword)
    setEnteredEmail('')
    setEnteredPassword('')
    setEnteredConfirmPassword('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={emailInputHandler}
          value={enteredEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          onChangeText={passwordInputHandler}
          value={enteredPassword}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirmar senha"
          onChangeText={passwordConfirmInputHandler}
          value={enteredConfirmPassword}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Registrar" onPress={loginHandler} color={'#97c5b4'} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={'#97c5b4'} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default RegisterInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#111111'
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    margin: 3,
    borderColor: '#97c5b4',
    backgroundColor: '#f9f8eb',
    color: '#111111',
    borderRadius: 6,
    width: '100%'
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})
