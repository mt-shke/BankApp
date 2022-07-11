import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Gap from '../../components/UI/Gap';
import Chart from './chart/Chart';
import Pie from './chart/Pie';
import NavBar from './header/NavBar';
import Contribution from './chart/Contribution';
import {IUser, IUserData} from '../../ts/interfaces/user';
import {useQuery} from '../../../App';

const StatsScreen: React.FC = () => {
  const users = useQuery('User');
  const firstUser = users[0] as unknown;
  const user = firstUser as IUserData;

  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar />
        <Gap height={60} />
        <Chart user={user} />
        <Gap height={60} />
        {/* <LineChart /> */}
        <Pie user={user} />
        <Gap height={60} />
        {/* <Contribution /> */}
      </View>
    </ScrollView>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
});
