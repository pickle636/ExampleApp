import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Example App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
