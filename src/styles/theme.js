import {StyleSheet} from 'react-native';

export const theme = {
  StatusBarColor: 'white',
  colors: {
    primary: '#4637CA',
    secondary: '#E4D9FF',
    secondary100: '#F6F2FF',
    secondaryBlue: 'rgba(217, 227, 245, 1)',
    tertiary: '#B89CFF',
    white: '#FFFFFF',
    black: 'black',
    yellow: '#FD9722',
    danger: '#FF5252',
  },
  size: {
    pageBorder: 20,
    tabBarHeight: 80,
    borderRadius: 10,
  },
};

export const classes = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.primary,
  },
  shadow: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
});
