import React from 'react'
import { View } from 'react-native'
import { Text } from '../../components'

import * as styles from './styles'

const SplashScreen = () => {
  return (
    <View style={styles.splash()}>
      <Text style={styles.splashText()}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen