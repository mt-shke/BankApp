import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {colors} from '../../../../globals';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IUser} from '../../../../ts/interfaces/user';

const Header: React.FC<IUser> = ({user}) => {
  console.log('in Header user is:', user);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerAvatar}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://i.pravatar.cc/' + Math.ceil(Math.random() * 100),
            }}
          />
          <Text style={styles.username}>
            {user.firstname} {user.lastname}
          </Text>
        </View>
        <View style={styles.containerIcons}>
          <Ionicons
            style={styles.icon}
            name={'search'}
            color={colors.white}
            size={24}
          />
          <Ionicons
            style={styles.icon}
            name={'notifications-outline'}
            color={colors.white}
            size={24}
          />
        </View>
      </View>
      <View style={styles.containerBottom} />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerIcons: {
    flexDirection: 'row',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.lightblue,
  },
  icon: {
    paddingHorizontal: 6,
  },
  containerBottom: {
    width: '100%',
    backgroundColor: colors.blue,
    height: 140,
    borderRadius: 26,
    position: 'absolute',
    zIndex: -1,
  },
});
