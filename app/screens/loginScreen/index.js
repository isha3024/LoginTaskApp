import React from 'react';
import { Image, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {images} from '../../theme';
import * as styles from './styles'; 
import { InputText, PrimaryButton, Text, Title } from '../../components';

export const LoginScreen = () => {

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
            <Title title={'Masuk'} />
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
          />
          <View style={styles.forgetPass()}>
            <View>
              <Text style={styles.regsiterText()}>Belum punya akun ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link()}>Daftar</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.link()}>Lupa password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer()}>
          <PrimaryButton
            title={'Masuk'}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

