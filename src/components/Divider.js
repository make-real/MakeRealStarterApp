import React from 'react';
import {View} from 'react-native';

const Divider = ({hr, vr, length = '100%', color, space, style}) => {
  return (
    <View
      style={{
        borderWidth: 0.3,
        height: hr ? length : 0,
        width: vr ? length : 0,
        borderColor: color || 'grey',
        opacity: 1,
        marginHorizontal: hr ? space : 0,
        marginVertical: vr ? space : 0,
        ...style,
      }}
    />
  );
};

export default Divider;
