import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import Intro from './Intro';
import HomeStack from './Home';
import AuthStack from './Auth';
import {NAVIGATION} from 'constants/Navigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.SPLASH.ROOT}>
      <Stack.Screen
        name={NAVIGATION.SPLASH.ROOT}
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NAVIGATION.HOME.ROOT}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NAVIGATION.INTRO.ROOT}
        component={Intro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION.AUTH.ROOT}
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
