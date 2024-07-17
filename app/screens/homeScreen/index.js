import React from 'react'
import { View } from 'react-native'
import { Text } from '../../components'

import * as styles from './styles'

const HomeScreen = () => {
  return (
    <View style={styles.rootContainer()}>
      <Text style={styles.text()}>Home Screen</Text>
    </View>
  )
}

export default HomeScreen