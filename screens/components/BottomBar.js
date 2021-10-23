import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';

export const tabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
  {
    name: 'Shop',
    active:
      'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
  },
  {
    name: 'Profile',
    active: 'https://avatars.githubusercontent.com/u/64252451?v=4',
    inactive: 'https://avatars.githubusercontent.com/u/64252451?v=4',
  },
];

const BottomTab = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{
          uri: activeTab === icon.name ? icon.active : icon.inactive,
        }}
        style={[
          styles.icon,
          icon.name === 'Profile' ? styles.profilePic() : null,
          activeTab === 'Profile' && icon.name === 'Profile'
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '2%',
    backgroundColor: 'black',
    zIndex: 999,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
    height: 45,
  },
  icon: {
    width: 26,
    height: 26,
  },
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff',
  }),
});

export default BottomTab;
