import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import DemoScreen from '../../screens/demoScreen';
import RegisterScreen from '../../screens/registerScreen';


const Stack = createStackNavigator();

export const MainStackNavigation = () => {
  // const [showSplashScreen, setHideSplashScreen] = useState(true);
  // useEffect(() => {
  //   // localStorageValueGet();
  //   setTimeout(() => {
  //     setHideSplashScreen(false);
  //   }, 3000);
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {showSplashScreen ? (
          <Stack.Screen
            name="splashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        ) : null} */}
        <Stack.Screen
          name="registerScreen"
          component={DemoScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
