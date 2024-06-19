import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Text} from '../text';

import * as styles from './styles';
import {color} from '../../theme';

const InputText = ({
  value,
  label,
  placeholder,
  keyboardType,
  placeholderTextColor,
  secureTextEntry,
  onChangeText,
  onChange,
  onFocus,
  onBlur,
  maxLength,
  minLength,
  ...props
}) => {
const [focus, setFocus] = useState(false);
  return (
    <View style={styles.mainContainer()}>
      <Text style={styles.label()}>{label}</Text>
      <TextInput
        value={value}
        style={[styles.input(), focus ? styles.focused() : styles.input()]}
        placeholder={placeholder}
        placeholderTextColor={color.semiTransBlack}
        onChange={onChange}
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

export default InputText;
