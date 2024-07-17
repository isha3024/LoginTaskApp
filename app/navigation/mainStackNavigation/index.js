import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { AuthStackNavigation } from '../authStackNavigation';
import SplashScreen from '../../screens/spalshScreen';


const Stack = createStackNavigator();

export const MainStackNavigation = () => {

  const [showsplashScreen, setHideSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 3000)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          showsplashScreen ? (
            <Stack.Screen name='Splash' component={SplashScreen}/>
          ): null
        }
        <Stack.Screen
          name="AuthStack"
          component={AuthStackNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
