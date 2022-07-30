import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Layout from 'components/Layout';
import {theme} from 'styles/theme';
import Refresh from 'components/RefreshControl';

function Library({navigation}) {
  return (
    <Layout>
      <ScrollView refreshControl={<Refresh />}>
        <View style={{padding: theme.size.pageBorder, elevation: 10}}></View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({});

export default Library;
