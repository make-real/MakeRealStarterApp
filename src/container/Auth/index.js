import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp';
import SignIn from './SignIn';
import OTP from './OTP';
import {NAVIGATION} from '../../constants/Navigation';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.AUTH.SCREENS.SIGN_UP}>
      <Stack.Screen
        name={NAVIGATION.AUTH.SCREENS.SIGN_UP}
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NAVIGATION.AUTH.SCREENS.SIGN_IN}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NAVIGATION.AUTH.SCREENS.OTP}
        component={OTP}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
