import React from 'react'
import { View, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { images } from '../../theme'
import * as styles from './styles'
import { InputText, PrimaryButton, Text, Title } from '../../components'

export const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={styles.rootContainer()}
      behavior="padding"
      enabled>
      <ScrollView>
        <View style={styles.logoContainer()}>
          <Image source={images.imgGlubyLogo} style={styles.image()} />
        </View>
        <View style={styles.inputContainer()}>
          <View style={styles.titleView()}>
            <Title title={'Daftar'} />
          </View>
          <InputText
            label={'Masukan Email'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            customStyle={styles.inputBottom()}
          />
          <InputText
            label={'Masukan Password'}
            placeholder={'Password'}
            keyboardType={'default'}
            secureTextEntry={true}
            customStyle={styles.inputBottom()}
          />
          <InputText
            label={'Masukan kembali Password'}
            placeholder={'Password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <View style={styles.forgetPass()}>
            <View>
              <Text style={styles.regsiterText()}>Sudah memiliki akun ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link()}>Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer()}>
          <PrimaryButton
            title={'Daftar'}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
