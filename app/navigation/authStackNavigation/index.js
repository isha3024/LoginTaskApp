import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { DemoScreen } from '../../screens/demoScreen/index'

const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="DemoScreen"
        component={DemoScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
