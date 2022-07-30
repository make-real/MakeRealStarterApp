import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {theme} from 'styles/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

function Layout({children, parimary, edge, statusbarColor}) {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={parimary ? theme.colors.primary : theme.colors.white}
        barStyle={parimary ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView
        edges={edge}
        style={{
          flex: 1,
          backgroundColor: statusbarColor
            ? statusbarColor
            : parimary
            ? theme.colors.primary
            : theme.colors.white,
        }}>
        <View
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: theme.colors.white,
          }}>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
}

export default Layout;
