import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Post from './components/Post';
import {POSTS} from '../data/posts';
import BottomTab, {tabIcons} from './components/BottomBar';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTab icons={tabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default HomeScreen;
