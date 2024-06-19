import React from 'react'
import { View } from 'react-native'

import { Text } from '../text'
import * as styles from './styles'

const Title = ({title}) => {
  return (
    <Text style={styles.title()}>{title}</Text>
  )
}

export default Title