import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForYou from './ForYou';
import {NAVIGATION} from 'constants/Navigation';

const Stack = createNativeStackNavigator();

const ForYouStack = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.FOR_YOU.SCREENS.INITIAL}>
      <Stack.Screen
        name={NAVIGATION.FOR_YOU.SCREENS.INITIAL}
        component={ForYou}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ForYouStack;
