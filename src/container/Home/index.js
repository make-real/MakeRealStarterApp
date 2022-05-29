import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {theme} from 'styles/theme';
import ForYou from './ForYou';
import Library from './Library';
import {NAVIGATION} from 'constants/Navigation';

const ICON_SIZE = 25;

const PAGE_ICON_MAP = {
  [NAVIGATION.FOR_YOU.ROOT]: color => (
    <Octicons name="home" size={ICON_SIZE} color={color} />
  ),
  [NAVIGATION.LIBRARY.ROOT]: color => (
    <Octicons name="bookmark" size={ICON_SIZE} color={color} />
  ),
  [NAVIGATION.LIBRARY.ROOT]: color => (
    <Octicons name="search" size={ICON_SIZE} color={color} />
  ),
  [NAVIGATION.LIBRARY.ROOT]: color => (
    <Feather name="mic" size={ICON_SIZE} color={color} />
  ),
  [NAVIGATION.LIBRARY.ROOT]: color => (
    <SimpleLineIcons name="user" size={ICON_SIZE} color={color} />
  ),
};

const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.FOR_YOU.ROOT}
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return PAGE_ICON_MAP[route.name](color);
        },
        labelStyle: {fontSize: 15},
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.tertiary,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          backgroundColor: theme.colors.secondary100,
          height: theme.size.tabBarHeight,
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 20,
        },
      })}>
      <Tab.Screen
        options={{tabBarLabel: 'For You'}}
        name={NAVIGATION.FOR_YOU.ROOT}
        component={ForYou}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Library'}}
        name={NAVIGATION.LIBRARY.ROOT}
        component={Library}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
