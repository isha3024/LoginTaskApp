import React from 'react'
import { View } from 'react-native'

import { Text } from '../text'
import * as styles from './styles'

export const Title = ({title}) => {
  return (
    <Text style={styles.title()}>{title}</Text>
  )
}
