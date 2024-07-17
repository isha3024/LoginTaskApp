import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreen';
import ForgetPassword from '../../screens/forgetPasswordScreen';
import RegisterScreen from '../../screens/registerScreen';
import HomeScreen from '../../screens/homeScreen';

const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  const config = {
    animation: 'timing',
    config: {
      stiffness: 7000,
      damping: 10,
      mass: 400,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'card',
        transitionSpec: {open: config, close: config},
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AuthStack.Group>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <AuthStack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </AuthStack.Group>
      <AuthStack.Screen name="Home" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};
