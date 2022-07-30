import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useCustomSelector} from 'store';
import {NAVIGATION} from 'constants/Navigation';
import Layout from 'components/Layout';
import {classes, theme} from 'styles/theme';

const Splash = ({navigation}) => {
  const {isIntroDone, token} = useCustomSelector(state => state.auth);

  const checkToken = async () => {
    // navigation.navigate(NAVIGATION.HOME.ROOT);
    navigation.navigate(NAVIGATION.AUTH.ROOT);
    return;
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
    <Layout>
      <View style={[{flex: 1}, classes.center]}>
        <Text
          style={{
            position: 'absolute',
            fontSize: 40,
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
            color: theme.colors.primary,
            fontWeight: 'bold',
          }}>
          Make Real App
        </Text>
      </View>
    </Layout>
  );
};

export default Splash;
