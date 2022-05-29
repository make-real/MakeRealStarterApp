import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {theme} from 'styles/theme';
import topRight from 'assets/background/topRight.png';
import bottomLeft from 'assets/background/bottomLeft.png';
import topLeft from 'assets/background/topLeft.png';
import bottomRight from 'assets/background/bottomRight.png';
import Space from './Space';

const deviceHeight = Dimensions.get('window').height;

function Background({children, leftRight, rightLeft, noNav}) {
  return (
    <View
      style={{
        flex: 1,
        minHeight: deviceHeight,
        backgroundColor: theme.colors.white,
      }}>
      {!rightLeft ? (
        <>
          <Image style={styles.topRight} source={topRight} />
          <Image style={styles.bottomLeft} source={bottomLeft} />
        </>
      ) : (
        <>
          <Image style={styles.topLeft} source={topLeft} />
          <Image style={styles.bottomRight} source={bottomRight} />
        </>
      )}
      {children}
      {!noNav && <Space height={theme.size.tabBarHeight} />}
    </View>
  );
}

const actionButtonHeight = 80;

const styles = StyleSheet.create({
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default Background;
