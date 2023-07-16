import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogoSplash} from '../screens';
import OnBoardingNavigation from './OnBoarding';
import MainNavigation from './MainNavigation';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'flip',
          headerShown: false,
        }}>
        <Stack.Screen name="SPLASH" component={LogoSplash} />
        <Stack.Screen name="ON_BOARDING" component={OnBoardingNavigation} />
        <Stack.Screen name="MAIN" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
