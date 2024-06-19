import React, { useState, useRef, useEffect } from 'react'
import { View, Image } from 'react-native'
import InputText from '../../components/inputText'

import * as styles from './styles'
import PrimaryButton from '../../components/btnPrimary'
import Title from '../../components/title'
import { images, size } from '../../theme'

const DemoScreen = () => {

  const [emailValue, setEmailValue] = useState('');
  const inputEmailRef = useRef(emailValue);
  useEffect(() => {
    console.log(inputEmailRef.current);
  }, [emailValue])

  const resetInput = () => {
    setEmailValue('');
  }

  const inputValueHandler = (value) => {
    setEmailValue(value);
  }

  return (
    <View style={styles.mainView()}>
      <Image source={images.imgGlubyLogo} width={size.moderateScale(200)} height={size.moderateScale(100)} />
      <Title title={'Masuk'}/>
      <InputText label='Masukan Email' placeholder='Email' keyboardType='email-address' onChangeText={inputValueHandler} value={emailValue}  />
      <PrimaryButton btnLabel='Masuk' onPress={resetInput} />
    </View>
  )
}

export default DemoScreen