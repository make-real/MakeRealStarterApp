import React from 'react';
import {View, StyleSheet} from 'react-native';
import Spinner from 'react-native-spinkit';

function Loader({color, size, style}) {
  return (
    <View>
      <Spinner
        style={style}
        isVisible={true}
        size={size || 30}
        type="Circle"
        color={color || 'white'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Loader;
