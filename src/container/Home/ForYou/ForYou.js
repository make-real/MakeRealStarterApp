import React, {} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Background from 'components/Background';
import {theme} from 'styles/theme';
import Refresh from 'components/RefreshControl';

function ForYou({navigation}) {
  return (
    <ScrollView refreshControl={<Refresh />}>
      <Background rightLeft>
        <View style={{padding: theme.size.pageBorder, elevation: 10}}></View>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default ForYou;
