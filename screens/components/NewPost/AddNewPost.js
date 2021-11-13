import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PostUploader from './PostUploader/PostUploaderForm';

const AddNewPost = ({navigation}) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <PostUploader navigation={navigation} />
  </View>
);

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: 'https://img.icons8.com/ios-filled/60/ffffff/back.png',
        }}
        style={styles.icon}
      />
    </TouchableOpacity>
    <Text style={styles.text}>New Post</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10,
  },
});

export default AddNewPost;
