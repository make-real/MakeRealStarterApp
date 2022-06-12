import React, {useEffect} from 'react';
import {Text as RNText} from 'react-native';
import {theme} from 'styles/theme';

const Text = ({
  children,
  color,
  style,
  onPress,
  bold,
  size,
  center,
  primary,
  title,
  lineHeight,
  subtitle,
  ...rest
}) => {
  const myStyles = {
    color: color ? color : primary ? theme.colors.primary : theme.colors.black,
    opacity: subtitle ? 0.6 : 1,
    fontWeight: bold ? 'bold' : 'normal',
    textAlign: center ? 'center' : 'left',
    fontSize: size || 15,
    lineHeight: lineHeight,
    // fontFamily: 'sans-serif-light',
  };

  const getStyles = () => {
    if (Array.isArray(style)) return [myStyles, ...style];
    return [myStyles, style];
  };

  return (
    <RNText {...rest} onPress={onPress} style={getStyles()}>
      {children}
    </RNText>
  );
};

export default Text;
