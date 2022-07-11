import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {randomArray} from '../../../../utils';
import UserAvatar from './UserAvatar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../../globals';

const UsersList: React.FC = () => {
  const randomArr: number[] = randomArray(10);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <Ionicons
            style={styles.avatar}
            name={'search'}
            color={colors.white}
            size={24}
          />
          <Text style={styles.text}>Search</Text>
        </View>
        {randomArr.map(num => (
          <UserAvatar key={num} />
        ))}
      </View>
    </ScrollView>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerSearch: {
    paddingHorizontal: 8,
    paddingTop: 40,
  },
  avatar: {
    width: 48,
    height: 48,
    textAlign: 'center',
    lineHeight: 48,
    backgroundColor: colors.blue,
    borderRadius: 50,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});
