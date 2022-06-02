import React, {useState, useRef, useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import Text from 'components/Text';
import Background from 'components/Background';
import Input from 'components/Input';

import signInBg from 'assets/auth/login.png';
import google from 'assets/auth/google.png';

import {theme} from 'styles/theme';
import Space from 'components/Space';
import Button from 'components/Button';
// import {Checkbox} from 'react-native-ui-lib';
import {login} from 'api/auth';
import {NAVIGATION} from 'constants/Navigation';
import {setAuthStore} from 'store/reducers/auth';
import {useCustomDispatch} from 'store';

function SignUp({navigation}) {
  const [phone, setPhone] = useState('+8801*********');
  const [state, setState] = useState({
    loading: false,
    error: '',
  });

  useEffect(() => {
    setState({...state, error: ''});
  }, [phone]);

  const dispatch = useCustomDispatch();

  const onSubmit = async () => {
    if (!phone) return;
    setState({...state, loading: true, error: ''});
    try {
      /// BYPASS AUTH
      setTimeout(() => {
        setState({...state, loading: false});
        setAuthStore({
          sessionId: 'sessionId',
          phoneNumber: phone,
        });
        navigation.navigate(NAVIGATION.AUTH.SCREENS.OTP);
      }, 2000);
      // const {data} = await login({phone: phone});
      // dispatch(
      //   setAuthStore({
      //     sessionId: data.sessionId,
      //     phoneNumber: phone,
      //   }),
      // );
      // navigation.navigate(NAVIGATION.AUTH.SCREENS.OTP);
      // setState({...state, loading: false});
    } catch (error) {
      console.log(error);
      setState({...state, loading: false, error: error.message});
    }
  };
  const goToRegister = () => {
    navigation.navigate(NAVIGATION.AUTH.SCREENS.SIGN_UP);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Background noNav>
        <View style={styles.container}>
          <Image style={styles.bg} source={signInBg} />
          <Input
            error={state.error}
            value={phone}
            onChangeText={setPhone}
            label="Phone"
          />
          <Space height={20} />
          {/* <Input label="Password" />
          <Space height={30} /> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'space-between',
              }}>
              {/* <Checkbox
                size={15}
                borderRadius={0}
                value={false}
                onValueChange={() => console.log('value changed')}
              /> */}
              <Space width={5} />
              <Text subtitle size={10}>
                Remember Password
              </Text>
            </View>
            <Text subtitle size={10}>
              Forget Password
            </Text>
          </View>
          <Space height={30} />
          <Button loader={state.loading} lg block onPress={onSubmit}>
            Log In
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
            Log in with google
          </Button>
          <Space height={20} />
          <Text onPress={goToRegister} bold primary>
            Create new account!
          </Text>
        </View>
      </Background>
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
