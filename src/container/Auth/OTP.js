import React, {useState, useRef, useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import Text from 'components/Text';
import Layout from 'components/Layout';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import otpBg from 'assets/auth/otp.png';
import tick from 'assets/auth/tickIcon.png';

import {theme} from 'styles/theme';
import Space from 'components/Space';
import Button from 'components/Button';
import BottomSheet from 'components/BottomSheet';
import {useCustomSelector, useCustomDispatch} from 'store';
import {verifyOTP} from 'api/auth';
import {NAVIGATION} from 'constants/Navigation';
import {setAuthStore} from 'store/reducers/auth';

function OTP({navigation}) {
  const {phoneNumber, sessionId} = useCustomSelector(state => state.auth);
  const dispatch = useCustomDispatch();
  const [code, setCode] = useState('1111');
  const [state, setState] = useState({
    loader: false,
    error: '',
  });
  useEffect(() => {
    setState({...state, loader: false, error: ''});
  }, [code]);
  const modal = useRef();
  const onSubmit = async () => {
    setTimeout(() => {
      setState({...state, loading: false});
      dispatch(
        setAuthStore({
          token: 'jwtToken',
        }),
      );
      modal?.current?.snapToIndex(1);
    }, 2000);
    if (!code) return;
    setState({...state, loader: true, error: ''});
    try {
      const {data} = await verifyOTP({
        otp: code,
        sessionId,
      });
      dispatch(
        setAuthStore({
          token: data.jwtToken,
        }),
      );
      modal?.current?.snapToIndex(1);
    } catch (error) {
      setState({...state, loader: false, error: error.otp});
      console.log(error);
    }
  };
  const confirm = () => {
    navigation.navigate(NAVIGATION.HOME.ROOT);
  };
  return (
    <Layout>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Image style={styles.bg} source={otpBg} />
            <Space height={25} />
            <Text primary bold size={25}>
              Enter your verification code
            </Text>
            <Space height={10} />
            <Text primary subtitle>
              We have sent a OTP to {phoneNumber}
            </Text>
            <Space height={25} />
            <OTPInputView
              style={{width: '80%', height: 100}}
              pinCount={4}
              code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={setCode}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <Text style={{textAlign: 'center'}}>
              <Text>Didn’t recieve the OTP?</Text>
              <Text bold primary>
                {' '}
                Resend
              </Text>
            </Text>
            <Space height={25} />
            <Button
              loader={state.loader}
              error={state.error}
              onPress={onSubmit}
              style={{width: 150}}
              rounded>
              Submit
            </Button>
          </View>
        </View>
        <BottomSheet modalRef={modal}>
          <View
            style={{
              marginHorizontal: theme.size.pageBorder,
              alignItems: 'center',
            }}>
            <Image source={tick} />
            <Space height={10} />
            <Text primary bold size={20} center>
              You have successfully verified your account
            </Text>
            <Space height={10} />
            <Button onPress={confirm}>Next</Button>
          </View>
        </BottomSheet>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: theme.colors.secondaryBlue,
  },
  bg: {
    width: 250,
    resizeMode: 'contain',
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: theme.size.pageBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    width: 60,
    height: 70,
    borderWidth: 1,
    backgroundColor: theme.colors.secondary,
    fontSize: 30,
    color: theme.colors.primary,
  },
  underlineStyleHighLighted: {
    borderColor: theme.colors.primary,
  },
});

export default OTP;
