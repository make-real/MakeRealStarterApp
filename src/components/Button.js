import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {theme} from 'styles/theme';
import Loader from './Loader';

function Button({
  textStyle,
  children,
  loader,
  iconLeft,
  iconRight,
  block,
  error,
  lg,
  style,
  onPress,
  rounded,
}) {
  return (
    <>
      {!!error && (
        <Text style={{marginBottom: 5}} bold color={theme.colors.danger}>
          {error}
        </Text>
      )}
      <TouchableOpacity
        disabled={loader}
        onPress={onPress}
        style={[
          {
            borderRadius: rounded ? 20 : 10,
            width: block && '100%',
            paddingVertical: lg ? 15 : 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          },
          styles.button,
          style,
        ]}>
        <View style={styles.iconLeft}>{iconLeft}</View>
        {loader && <Loader size={20} style={{marginRight: 10}} />}
        <Text bold style={[styles.text, textStyle]}>
          {children}
        </Text>
        <View style={styles.iconRight}>{iconRight}</View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  iconLeft: {
    position: 'absolute',
    width: '100%',
  },
  iconRight: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.white,
  },
});

export default Button;
