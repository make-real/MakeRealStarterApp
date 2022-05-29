import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Text from 'components/Text';
import {theme, classes} from '../styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imageCoverEffect from '../assets/book/Intersect.png';
import {useNavigation} from '@react-navigation/native';
import BookSkeleton from './Skeletonloader/BookSkeletor';
import {DummyArray, DummyBook} from '../constants/repository';
import {bookSaveUnsave} from '../api/book';

const SingleBook = ({book}) => {
  const [isSaved, setIsSaved] = useState(book.saved);
  const mark = async () => {
    try {
      setIsSaved(!isSaved);
      await bookSaveUnsave(book._id);
    } catch (error) {
      setIsSaved(!isSaved);
    }
  };
  return (
    <TouchableOpacity style={{alignItems: 'center', marginVertical: 10}}>
      <Image style={styles.imageContainer} source={{uri: book.coverPhoto}} />
      <View style={styles.rootContainer}>
        <View style={styles.coverArea}>
          <Image style={{width: '100%'}} source={imageCoverEffect} />
        </View>
        <View
          style={{
            padding: 10,
            height: 85,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text size={10} bold style={{maxWidth: 130}}>
              {book.name}
            </Text>
            <TouchableOpacity onPress={mark}>
              <Ionicons
                name={isSaved ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text size={10}>{book.authorName}</Text>
          <View style={styles.bookReadTime}>
            <Text size={10}>{book.bookReadTime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const BookList = ({title, apiCall, renderItem}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const page = useRef(1);
  const limit = useRef(10);

  useEffect(() => {
    getDate();
  }, []);

  const getDate = async () => {
    setLoading(true);
    try {
      setTimeout(() => {
        setData(DummyArray);
        setLoading(false);
      }, 2000);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <>
      {title && (
        <Text bold size={20}>
          {title}
        </Text>
      )}
      <ScrollView
        style={{marginHorizontal: -theme.size.pageBorder}}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {loading
          ? DummyArray.map((x, i) => (
              <BookSkeleton
                key={i}
                style={{marginLeft: theme.size.pageBorder, marginVertical: 10}}
              />
            ))
          : data?.map((book, index) =>
              renderItem ? (
                renderItem({book, index})
              ) : (
                <SingleBook book={book} key={index} />
              ),
            )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: -155,
    zIndex: 1,
    height: 200,
    width: 130,
    ...classes.shadow,
    margin: 20,
  },
  titleContainer: {},
  authorText: {},
  readTime: {},
  rootContainer: {
    ...classes.shadow,
    height: 250,
    width: 180,
    backgroundColor: theme.colors.white,
    marginHorizontal: 20,
    borderRadius: theme.size.borderRadius,
  },
  coverArea: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: 120,
  },
});

export default BookList;
