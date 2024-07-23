import React from 'react'
import { Image, View } from 'react-native'

import { images, size } from '../../theme'  
import * as styles from './styles'

export const SplashScreen = () => {
  return (
    <View style={styles.splash()}>
      <Image source={images.imgGlubyLogo} width={size.moderateScale(100)} height={size.moderateScale(100)} />
    </View>
  )
}
