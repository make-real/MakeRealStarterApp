import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Library from './Library';
import {NAVIGATION} from '../../../constants/Navigation';

const Stack = createNativeStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.LIBRARY.SCREENS.INITIAL}>
      <Stack.Screen
        name={NAVIGATION.LIBRARY.SCREENS.INITIAL}
        component={Library}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LibraryStack;
