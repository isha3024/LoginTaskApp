import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Text} from '../text';

import * as styles from './styles';
import {color} from '../../theme';

export const InputText = ({
  value,
  label,
  customStyle,
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
    <View style={[styles.mainContainer(), customStyle]}>
      <Text style={styles.label()}>{label}</Text>
      <TextInput
        value={value}
        style={[focus ? styles.focused() : styles.input()]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? color.placeholderColor}
        onChange={onChange}
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        minLength={minLength}
        {...props}
      />
    </View>
  );
};

