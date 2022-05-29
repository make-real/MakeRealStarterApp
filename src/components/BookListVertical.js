import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Text from 'components/Text';
import {theme, classes} from 'styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import imageCoverEffect from '../assets/book/Intersect.png';
import {useNavigation} from '@react-navigation/native';
import Space from './Space';
import ProgressBar from './ProgressBar';

const BookListVertical = ({books, title}) => {
  const navigation = useNavigation();
  return (
    <>
      <Text bold size={20}>
        {title}
      </Text>
      <Space height={10} />
      <View>
        {books.map(book => (
          <TouchableOpacity
            onPress={() => navigation.navigate('BookDetails')}
            style={styles.container}>
            <View style={styles.rootContainer}>
              <Image
                style={styles.imageContainer}
                source={{uri: book.coverPhoto}}
              />
              <Image source={imageCoverEffect} />
            </View>
            <Space width={20} />
            <View style={styles.details}>
              <Text style={{maxWidth: 150}} bold size={10} primary>
                {book.name}
              </Text>
              <Text size={13} primary>
                {book.authorName}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 180}}>
                <View style={styles.state}>
                  <Ionicons
                    name="book-outline"
                    size={7}
                    color={theme.colors.primary}
                  />
                  <Feather
                    name="headphones"
                    size={7}
                    color={theme.colors.primary}
                  />
                </View>
                <SimpleLineIcons
                  name="options-vertical"
                  size={20}
                  color={theme.colors.primary}
                />
              </View>
              <Space height={20} />
              <ProgressBar value={4} />
              <Text size={10} primary>
                Chapter 2 of 10
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  state: {
    height: 15,
    paddingHorizontal: 3,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  container: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    ...classes.shadow,
    marginBottom: -30,
    zIndex: 1,
    height: 150,
    width: 100,
  },
  rootContainer: {
    height: 180,
    width: 150,
    resizeMode: 'fit',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookListVertical;
