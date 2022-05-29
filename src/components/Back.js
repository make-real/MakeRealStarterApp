import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import Icon from 'react-native-vector-icons/Feather';
import {theme} from 'styles/theme';
import {useNavigation} from '@react-navigation/native';

function BackButton({style, title, float, options}) {
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.container,
        {
          position: float ? 'absolute' : 'relative',
        },
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={back} style={[styles.button, style]}>
          <Icon name="chevron-left" size={25} color={theme.colors.primary} />
        </TouchableOpacity>
        <Text bold size={25} primary>
          {title}
        </Text>
      </View>
      <View>{options}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.size.pageBorder,
    backgroundColor: theme.colors.white,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default BackButton;
