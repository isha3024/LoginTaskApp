import { View, TouchableOpacity } from 'react-native'
import { Text } from '../text'
import React from 'react'

import * as styles from './styles'

const PrimaryButton = ({title, activeOpacity, onPress, disabled, customStyle}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.mainBtnContainer(), customStyle]} 
      activeOpacity={activeOpacity ?? 0.8}
      disabled={disabled}>
      <Text style={styles.btnText()}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton