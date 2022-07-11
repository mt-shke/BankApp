import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useQuery, useRealm} from '../../../App';
import Gap from '../../components/UI/Gap';
import {IUserData} from '../../ts/interfaces';
import {getRandomUserData} from '../../utils';
import Header from '../HomeStack/HomeScreen/header/Header';
import BankCard from './cards/BankCard';
import CustomCarousel from './cards/CustomCarousel';
import Settings from './profileSettings/Settings';

const AccountScreen: React.FC = () => {
  const users = useQuery('User');
  const firstUser = users[0] as unknown;
  const user = firstUser as IUserData;
  return (
    <View style={styles.container}>
      <Header user={user} key={user._id} />
      <ScrollView>
        <View style={styles.containerView}>
          <BankCard />
          {/* <CustomCarousel /> */}
          <Gap height={20} />
          <Settings />
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  containerView: {
    marginTop: 10,
    marginBottom: 160,
  },
});
