import React, {useState, useRef, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {theme, classes} from 'styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from 'components/Background';

import introImage1 from 'assets/intro/intro1.png';
import introImage2 from 'assets/intro/intro2.png';
import introImage3 from 'assets/intro/intro3.png';
import introImage4 from 'assets/intro/intro4.png';
import Text from 'components/Text';
import Button from 'components/Button';
import Space from 'components/Space';
import {NAVIGATION} from 'constants/Navigation';
import {useCustomDispatch} from 'store';
import {setAuthStore} from 'store/reducers/auth';

const slides = [
  {
    key: 0,
    image: introImage1,
    title:
      'A True Book Alternative For You Read or listen to amazingly detailed book summaries.',
    button: {
      text: 'Get Started',
      color: theme.colors.primary,
    },
    style: {
      marginTop: -50,
    },
  },
  {
    key: 1,
    image: introImage2,
    title: 'Enjoy Reading Offline Experience',
    description:
      'Read or listen to our books while on the move, without internet access',
    button: {
      text: 'Next',
      color: theme.colors.yellow,
    },
  },
  {
    key: 2,
    image: introImage3,
    title: 'Read And Play Audio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat accumsan habitant',
    button: {
      text: 'Next',
      color: theme.colors.primary,
    },
  },
  {
    key: 3,
    image: introImage4,
    title: 'Read And Play Audio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat accumsan habitant',
    button: {
      text: 'Next',
      color: theme.colors.primary,
    },
  },
];

function Intro({navigation}) {
  const slider = useRef();
  const dispatch = useCustomDispatch();

  const [index, setIndex] = useState(0);

  const next = () => {
    if (slides.length === index + 1) {
      dispatch(
        setAuthStore({
          isIntroDone: true,
        }),
      );
      navigation.navigate(NAVIGATION.AUTH.ROOT);
      return;
    }
    setIndex(prev => prev + 1);
  };

  const back = () => {
    setIndex(prev => prev - 1);
  };

  const _onDone = async () => {
    await AsyncStorage.setItem('intro', 'true');
    navigation.navigate('splash');
  };

  useEffect(() => {
    slider.current.goToSlide(index, true);
  }, [index]);

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.image} source={item.image} />
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
            },
            item.style,
          ]}></View>
        <Text bold primary center size={20} title>
          {item.title}
        </Text>
        {/* <Space height={20}/> */}
        {item.description && (
          <Text style={{marginTop: 15}} center size={15}>
            {item.description}
          </Text>
        )}
        <Button
          rounded
          onPress={next}
          style={{marginTop: 20, backgroundColor: item.button.color}}>
          {item.button.text}
        </Button>
      </View>
    );
  };
  return (
    <Background noNav>
      <AppIntroSlider
        ref={ref => (slider.current = ref)}
        onSlideChange={index => setIndex(index)}
        // renderSkipButton={() => null}
        // renderNextButton={() => null}
        // renderPrevButton={() => null}
        // renderDoneButton={() => null}
        renderItem={_renderItem}
        data={slides}
        dotStyle={{
          backgroundColor: theme.colors.primary,
        }}
        activeDotStyle={{
          backgroundColor: theme.colors.secondary,
          width: 20,
        }}
      />
    </Background>
  );
}

const actionButtonHeight = 80;

const styles = StyleSheet.create({
  action: {
    position: 'absolute',
    bottom: actionButtonHeight,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8A8CB2',
    marginBottom: 20,
  },
  text: {
    maxWidth: '80%',
    textAlign: 'center',
    color: theme.colors.primary,
  },
  slide: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: actionButtonHeight + 100,
  },
  image: {
    marginTop: 50,
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  bgBottom: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    width: '100%',
  },
});

export default Intro;
