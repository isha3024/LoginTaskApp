import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { SplashScreen } from '../../screens';
import { AuthStackNavigation } from '../authStackNavigation';


const Stack = createStackNavigator();

export const MainStackNavigation = () => {

  const [showsplashScreen, setHideSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 1000)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          showsplashScreen && (
            <Stack.Screen name='Splash' component={SplashScreen}/>
          )
        }
        <Stack.Screen
          name="AuthStack"
          component={ AuthStackNavigation }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
