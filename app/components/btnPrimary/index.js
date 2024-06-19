import { View, TouchableOpacity } from 'react-native'
import { Text } from '../text'
import React from 'react'

import * as styles from './styles'

const PrimaryButton = ({btnLabel, onPress}) => {
  return (
    
    <TouchableOpacity onPress={onPress} style={styles.mainBtnContainer()} activeOpacity={0.8}>
      <Text style={styles.btnText()}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton