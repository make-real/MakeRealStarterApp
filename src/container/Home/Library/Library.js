import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import Text from 'components/Text';
import Background from 'components/Background';
import {theme, classes} from 'styles/theme';
import BackButton from 'components/Back';
import Space from 'components/Space';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BookListVertical from 'components/BookListVertical';
import {DummyArray} from '../../../constants/repository';

const SubsciptionCard = ({icon, title, subTitle}) => {
  return (
    <View style={styles.SubsciptionCard}>
      <View style={styles.inline}>
        <View style={styles.iconCover}>
          <Ionicons name={icon} size={20} color={theme.colors.primary} />
        </View>
        <Space width={10} />
        <View>
          <Text size={13} primary>
            {title}
          </Text>
          <Text size={13} primary>
            {subTitle}
          </Text>
        </View>
      </View>
      <SimpleLineIcons
        name="arrow-right"
        size={20}
        color={theme.colors.primary}
      />
    </View>
  );
};

function Library({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <Background>
        <BackButton title="My Library" />
        <View style={{flex: 1, paddingHorizontal: theme.size.pageBorder}}>
          <SubsciptionCard icon="bookmark" title="Saved" subTitle="4 items" />
          <SubsciptionCard
            icon="checkmark"
            title="Finished"
            subTitle="1 items"
          />
          <SubsciptionCard
            icon="cloud-download-outline"
            title="Downloaded"
            subTitle="1 items"
          />
          <Space height={40} />
          <BookListVertical title="My History" books={DummyArray} />
        </View>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconCover: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  SubsciptionCard: {
    paddingHorizontal: 20,
    width: '100%',
    height: 80,
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: theme.colors.secondaryBlue,
  },
  bg: {
    width: 300,
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

export default Library;
