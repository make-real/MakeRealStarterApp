import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Background from '../../../components/Background';
import Text from '../../../components/Text';
import {theme, classes} from '../../../styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imageCoverEffect from '../../../assets/book/Intersect.png';
import courseCover from '../../../assets/book/slide.png';
import Space from '../../../components/Space';
import BookList from '../../../components/BookList';
import BookSkeleton from '../../../components/Skeletonloader/BookSkeletor';
import {DummyArray} from '../../../constants/repository';
import TitleSkeleton from '../../../components/Skeletonloader/TitleSceleton';
import {getBooksFrom} from '../../../api/book';
import {useDispatch} from 'react-redux';
import {setAuthStore} from '../../../store/reducers/auth';
import {NAVIGATION} from '../../../constants/Navigation';
import Refresh from '../../../components/RefreshControl';
import {BookSize} from '../../../constants/Size';

function ForYou({navigation}) {
  useEffect(() => {}, []);

  const logOut = () => {
    dispatch(
      setAuthStore({
        token: null,
        userData: null,
      }),
    );
    navigation.navigate(NAVIGATION.AUTH.ROOT);
  };
  return (
    <ScrollView refreshControl={<Refresh />}>
      <Background rightLeft>
        <View style={{padding: theme.size.pageBorder, elevation: 10}}>
          <View style={styles.header}>
            <Text bold size={25}>
              For You
            </Text>
            <TouchableOpacity onPress={logOut}>
              <Ionicons
                name="settings-outline"
                size={27}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{marginHorizontal: -theme.size.pageBorder}}
            showsHorizontalScrollIndicator={false}
            horizontal>
            <View style={[styles.horizontalView, classes.shadow]}>
              <View style={{minWidth: 600}}>
                <BookList
                  apiCall={(page, limit) =>
                    getBooksFrom('following-topics', {page, limit})
                  }
                  renderItem={({book, index}) => (
                    <View key={index} style={styles.imageContainer}>
                      <Image
                        style={styles.bookCover}
                        source={{
                          uri: book.coverPhoto,
                        }}
                      />
                    </View>
                  )}
                />
              </View>
            </View>
          </ScrollView>
          <Space height={40} />
          <BookList
            title="Selected just for you"
            apiCall={(page, limit) =>
              getBooksFrom('following-topics', {page, limit})
            }
          />
          <Space height={20} />
          <BookList
            title="Recommend for you"
            apiCall={(page, limit) =>
              getBooksFrom('recommended', {page, limit})
            }
          />
          <Space height={20} />
          <BookList
            title="Recently started"
            apiCall={(page, limit) =>
              getBooksFrom('recently-started', {page, limit})
            }
          />
          <Space height={20} />
          <BookList
            title="Collection for you"
            apiCall={(page, limit) => getBooksFrom('saved', {page, limit})}
          />
        </View>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  following: {
    padding: 10,
    marginLeft: theme.size.pageBorder,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: theme.size.borderRadius,
    backgroundColor: theme.colors.secondary,
  },
  header: {
    // marginHorizontal: theme.size.borderLg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookCover: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    height: BookSize.height,
    width: BookSize.width,
    ...classes.shadow,
    elevation: 10,
    margin: 20,
  },
  horizontalView: {
    marginHorizontal: theme.size.pageBorder,
    paddingLeft: theme.size.pageBorder,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: theme.size.borderRadius,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 20,
  },
});

export default ForYou;
