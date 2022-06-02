import React, {useState, useRef, useEffect} from 'react';
import {TextInput as RNInput, StyleSheet, View} from 'react-native';
import {theme} from 'styles/theme';
import Text from './Text';

function Input({label, lg, onChangeText, value, error, style, ...rest}) {
  return (
    <View style={styles.container}>
      {label && (
        <Text size={15} subtitle style={styles.label}>
          {label}
        </Text>
      )}
      <RNInput
        {...rest}
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
      />
      {error ? (
        <Text bold style={{marginTop: 5}} color={theme.colors.danger}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 7,
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
    elevation: 7,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 15,
    color: theme.colors.black,
  },
});

export default Input;
