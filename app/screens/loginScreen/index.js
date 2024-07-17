import React, {useState} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

import * as styles from './styles';
import {images} from '../../theme';
import Title from '../../components/title/index';
import InputText from '../../components/inputText/index';
import PrimaryButton from '../../components/btnPrimary/index';
import {Text} from '../../components/text/index';
import {useNavigation} from '@react-navigation/native';
import { useMainContext } from '../../contexts/MainContext';

const LoginScreen = () => {
  // const dataNew = useMainContext()?.data;
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState({});
  // const [isFormvalid, setIsFormValid] = useState(false)

  const handleEmail = (email) => {
    setEmail(email);
  }

  // const validateLogin = () => {
  //   let errors = {}
  //   if(!email) {
  //     errors.email = 'Email is required!'
  //   }
  //   if(!password) {
  //     errors.password = 'Password Invalid'
  //   }
  //   setErrors(errors)
  //   setIsFormValid(Object.keys(errors).length === 0);
  // }

  // const handleLoginPress = () => {
  //   if(isFormvalid) {
  //     navigation.navigate('Register')
  //   }
  // }

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
            value={email}
            onChangeText={(val)=> {setEmail(val)}}
            label={'Masukan Email'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            customStyle={styles.inputBottom()}
          />
          {/* {
            errors.email ? (<Text>{errors.email}</Text>) : null
          } */}
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
            // customStyle={{opacity: isFormvalid ? 1 : 0.5}}
            title={'Masuk'}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
