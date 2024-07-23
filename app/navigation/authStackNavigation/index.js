import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ForgetPassword, LoginScreen, RegisterScreen } from '../../screens';

const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Group>
        <AuthStack.Screen name="Login" component={ LoginScreen } />
        <AuthStack.Screen name="ForgetPassword" component={ ForgetPassword } />
        <AuthStack.Screen name="Register" component={ RegisterScreen } />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};
