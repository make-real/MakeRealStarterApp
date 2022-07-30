import React, {useState, useRef, useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import Text from 'components/Text';
import Layout from 'components/Layout';
import Input from 'components/Input';

import signUpBg from 'assets/auth/signup.png';
import google from 'assets/auth/google.png';

import {theme} from 'styles/theme';
import Space from 'components/Space';
import Button from 'components/Button';
import {NAVIGATION} from 'constants/Navigation';
import {setAuthStore} from 'store/reducers/auth';
import {useCustomDispatch} from 'store';

function SignUp({navigation}) {
  const [user, setUser] = useState({
    fullName: 'Test User',
    email: 'test@gmail.com',
    phone: '+8801*********',
  });
  const [state, setState] = useState({
    loading: false,
    error: '',
  });

  useEffect(() => {
    setState({...state, error: ''});
  }, [user]);

  const dispatch = useCustomDispatch();

  const onSubmit = async () => {
    if (!user.fullName || !user.phone) return;
    setState({...state, loading: true, error: ''});
    try {
      setTimeout(() => {
        setState({...state, loading: false});
        setAuthStore({
          sessionId: 'sessionId',
          phoneNumber: user.phone,
        });
        navigation.navigate(NAVIGATION.AUTH.SCREENS.OTP);
      }, 2000);
    } catch (error) {
      console.log(error);
      setState({...state, loading: false, error: error.message});
    }
  };
  const handleChange = (name, value) => {
    setUser({...user, [name]: value});
  };
  const goToLogin = () => {
    navigation.navigate(NAVIGATION.AUTH.SCREENS.SIGN_IN);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Layout noNav>
        <View style={styles.container}>
          <Image style={styles.bg} source={signUpBg} />
          <Text style={{marginTop: 15}} primary bold size={25}>
            Create your account
          </Text>
          <Input
            value={user.fullName}
            onChangeText={v => handleChange('fullName', v)}
            label="Name"
          />
          <Space height={15} />
          <Input
            value={user.email}
            onChangeText={v => handleChange('email', v)}
            label="Email"
          />
          <Space height={15} />
          <Input
            value={user.phone}
            onChangeText={v => handleChange('phone', v)}
            label="Phone"
          />
          <Space height={30} />
          <Button
            loader={state.loading}
            error={state.error}
            lg
            block
            onPress={onSubmit}>
            Create new account
          </Button>
          <Text style={{marginVertical: 5}} title bold size={20}>
            or
          </Text>
          <Button
            iconLeft={<Image source={google} />}
            style={styles.googleButton}
            textStyle={{color: theme.colors.black}}
            lg
            block>
            Sign up with google
          </Button>
          <Space height={30} />
          <Text>
            <Text>Already have an account?</Text>
            <Text onPress={goToLogin} bold primary>
              {' '}
              Log In
            </Text>
          </Text>
        </View>
        <Space height={30} />
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: theme.colors.secondaryBlue,
  },
  bg: {
    width: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: theme.size.pageBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
