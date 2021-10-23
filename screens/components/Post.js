import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';

const postFooterIcons = [
  {
    name: 'Like',
    likedIconUrl:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    iconUrl: 'https://img.icons8.com/ios-glyphs/30/e01414/filled-like.png',
  },
  {
    name: 'Comment',
    iconUrl:
      'https://img.icons8.com/material-outlined/60/ffffff/speech-bubble--v1.png',
  },
  {
    name: 'Share',
    iconUrl:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/sent.png',
  },
  {
    name: 'Save',
    iconUrl:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png',
  },
];

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 8, marginTop: 10}}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 8,
    }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: post.userProfileImage}}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>{post.user}</Text>
    </View>
    <Text style={{color: 'white', fontWeight: '900', alignItems: 'center'}}>
      ...
    </Text>
  </View>
);

const PostImage = ({post}) => (
  <View
    style={{
      width: '100%',
      height: 450,
    }}>
    <Image source={{uri: post.imagePostUrl}} style={styles.postImage} />
  </View>
);

const Icon = ({imageStyle, imageUrl}) => (
  <TouchableOpacity>
    <Image style={imageStyle} source={{uri: imageUrl}} />
  </TouchableOpacity>
);

const PostFooter = () => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={styles.leftFooterContainer}>
      <Icon
        imageStyle={styles.footerIcons}
        imageUrl={postFooterIcons[0].iconUrl}
      />
      <Icon
        imageStyle={styles.footerIcons}
        imageUrl={postFooterIcons[1].iconUrl}
      />
      <Icon
        imageStyle={[styles.footerIcons, styles.shareIcon]}
        imageUrl={postFooterIcons[2].iconUrl}
      />
    </View>
    <View style={styles.rightFooterContainer}>
      <Icon
        imageStyle={styles.footerIcons}
        imageUrl={postFooterIcons[3].iconUrl}
      />
    </View>
  </View>
);

const Likes = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 6}}>
    <Text style={{color: 'white', fontWeight: '700', fontSize: 14}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop: 4}}>
    <Text style={{color: 'white'}}>
      <Text style={{fontWeight: '600', fontSize: 14}}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({post}) => (
  <View style={{marginTop: 4}}>
    {!!post.comments.length && (
      <Text style={{color: 'gray'}}>
        View {post.comments.length > 1 ? 'all ' : ''}
        {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
);

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '600', fontSize: 14}}>{comment.user}</Text>
          <Text style={{fontSize: 13}}> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: '#CA1D7E',
    borderWidth: 2,
  },
  profileName: {
    color: 'white',
    marginLeft: 6,
    fontWeight: '700',
  },
  postImage: {
    height: '100%',
    resizeMode: 'cover',
  },
  footerIcons: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  leftFooterContainer: {
    flexDirection: 'row',
  },
  shareIcon: {
    transform: [{rotate: '320deg'}],
    width: 24,
    height: 18,
  },
});

export default Post;
