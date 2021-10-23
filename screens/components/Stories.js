import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {USERS} from '../../data/users';

const Stories = () => {
  return (
    <View style={{marginTop: 8, marginLeft: 8}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map(story => (
          <View style={styles.storyWrap}>
            <Image source={{uri: story.image}} style={styles.userImages} />
            <Text style={styles.userNames}>
              {story.user.length > 10
                ? story.user.slice(0, 9).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storyWrap: {
    alignItems: 'center',
    marginBottom: 8,
  },
  userImages: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 8,
    borderColor: '#CA1D7E',
    borderWidth: 3,
  },
  userNames: {
    color: 'white',
    fontSize: 11,
    fontWeight: '500',
  },
});

export default Stories;
