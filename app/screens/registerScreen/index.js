import React from 'react'

import { Screen } from '../../components/screen/index'
import PrimaryButton from '../../components/btnPrimary'
import InputText from '../../components/inputText'
import Title from '../../components/title'
import { IcGlubyLogo } from '../../theme/Icons'
import { IcPerson } from '../../theme/Icons'
import { View } from 'react-native'

const RegisterScreen = () => {
  return (
    <View style={{flex: 1}}>
      <IcPerson width={40} height={40} fill={'#000'}/>
      <IcGlubyLogo width={50} height={50} fill={'#000'}/>
    </View>
  )
}

export default RegisterScreen