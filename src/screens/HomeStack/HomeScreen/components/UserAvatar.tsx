import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {randomUsername} from '../../../../utils';

const UserAvatar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://i.pravatar.cc/' + Math.ceil(Math.random() * 100),
        }}
      />
      <Text style={styles.text}>{randomUsername().slice(0, 6) + '...'}</Text>
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 40,
  },
  avatar: {
    width: 48,
    height: 48,
    padding: 20,
    borderRadius: 50,
  },
  text: {
    fontSize: 12,
  },
});
