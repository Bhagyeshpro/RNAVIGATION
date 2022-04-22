import { StyleSheet, Button,  Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: "red"}}>App</Text>
      <Button
  title="Learn More"
  color="#841584"
/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})