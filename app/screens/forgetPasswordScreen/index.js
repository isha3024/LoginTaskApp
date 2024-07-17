import React from 'react'
import {
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import * as styles from './styles';
import {images} from '../../theme';
import Title from '../../components/title/index';
import InputText from '../../components/inputText/index';
import PrimaryButton from '../../components/btnPrimary/index';
import {Text} from '../../components/text/index';
import {useNavigation} from '@react-navigation/native';

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer()}>
        <View style={styles.logoContainer()}>
          <Image source={images.imgGlubyLogo} style={styles.image()} />
        </View>
        <View style={styles.inputContainer()}>
          <View style={styles.titleView()}>
            <Title title={'Lupa Password'} />
          </View>
          <View style={styles.textContainer()}>
            <Text style={styles.subtitle()}>Pesan</Text>
            <Text style={styles.text()}>Masukan email Anda dan tunggu kode etik akan dikirimkan.</Text>
          </View>
          <InputText
            label={'Masukan Email'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            customStyle={styles.input()}
          />
        </View>
        <View style={styles.buttonContainer()}>
          <PrimaryButton
            title={'Kirim'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        </View>
  )
}

export default ForgetPassword