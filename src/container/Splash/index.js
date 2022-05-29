import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCustomSelector} from '../../store';
import {NAVIGATION} from '../../constants/Navigation';
import Background from '../../components/Background';
// import Text from '../../components/Text';
import {classes, theme} from '../../styles/theme';

const Splash = ({navigation}) => {
  const {isIntroDone, token} = useCustomSelector(state => state.auth);

  const checkToken = async () => {
    if (!isIntroDone) {
      navigation.navigate(NAVIGATION.INTRO.ROOT);
      return;
    } else if (token) {
      navigation.navigate(NAVIGATION.HOME.ROOT);
    } else {
      navigation.navigate(NAVIGATION.AUTH.ROOT);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Background>
      <View style={[{flex: 1}, classes.center]}>
        <Text
          style={{
            position: 'absolute',
            fontSize: 40,
            fontFamily: 'serif',
            color: 'black',
            opacity: 0.3,
            fontWeight: 'bold',
          }}>
          Make Real App
        </Text>
        <Text
          style={{
            marginTop: -5,
            marginLeft: -5,
            fontSize: 40,
            fontFamily: 'serif',
            color: theme.colors.primary,
            fontWeight: 'bold',
          }}>
          Make Real App
        </Text>
      </View>
    </Background>
  );
};

export default Splash;

// export default splash;
