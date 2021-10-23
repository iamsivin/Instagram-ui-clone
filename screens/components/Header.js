import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsWrap}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeCount}>15</Text>
          </View>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 18,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  iconsWrap: {
    flexDirection: 'row',
    color: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  unreadBadge: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 24,
    bottom: 18,
    width: 25,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeCount: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
