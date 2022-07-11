import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from './header/Header';
import LandingView from './components/LandingView';
import {colors} from '../../../globals';
import Transactions from './components/Transactions';
import ContainerButton from './components/ContainerButton';
import Gap from '../../../components/UI/Gap';
import PaymentItem from './components/payment/PaymentItem';
import {IUser, IUserData} from '../../../ts/interfaces/user';
import {getOrderedPayments} from '../../../utils';
import UsersList from './components/UsersList';
import auth from '@react-native-firebase/auth';
import {signOutWithoutCtx} from '../../../firebase';
import {UserContext} from '../../../state/UserContext';
import {getUserData} from '../../../firebase/usersCollection';

const HomeScreen: React.FC = () => {
  // const users = useQuery('User');
  // const firstUser = users[0] as unknown;
  // const user = firstUser as IUserData;
  const {state: userCtx, dispatch} = useContext(UserContext);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      setUserData();
    }
  }, []);

  const setUserData = async () => {
    const data = await getUserData(userCtx.user.uid);
    if (data) {
      const updatedData = data.data();
      setUser(updatedData);
    }
  };
  if (!user) {
    return (
      <View style={styles.container}>
        <Text>
          Hello in homescreen - you are now logged as {userCtx?.email}
        </Text>
        <Text>Loading data</Text>
        <ActivityIndicator size={'large'} />

        <TouchableOpacity onPress={() => signOutWithoutCtx()}>
          <View style={styles.signOut}>
            <Text>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header user={user} />
      <FlatList
        style={styles.containerFL}
        initialNumToRender={10}
        numColumns={1}
        // horizontal={true}
        data={user.incomes}
        ListHeaderComponent={
          <>
            <View style={styles.containerContent}>
              <LandingView user={user} />
              <UsersList />
              <ContainerButton user={user} />
            </View>
            <Gap height={30} />
            <Transactions />
            <Gap height={10} />
            <View style={styles.itemsTop} />
          </>
        }
        renderItem={({item}) => (
          <View style={styles.containerItem}>
            <PaymentItem payment={item} />
          </View>
        )}
        // ItemSeparatorComponent={({highlighted}) => (
        //   // <Gap height={20} backgroundColor={colors.white} />
        //   <View style={{backgroundColor: 'white', height: 20}} />
        // )}
        ListFooterComponent={<View style={styles.itemsBottom} />}
      />
      <TouchableOpacity onPress={() => signOutWithoutCtx()}>
        <View style={styles.signOut}>
          <Text>Sign out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  containerContent: {
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 14,
    overflow: 'hidden',
  },
  containerFL: {
    backgroundColor: colors.transparent,
  },
  containerItem: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  itemsTop: {
    height: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginHorizontal: 20,
  },
  itemsBottom: {
    height: 20,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginHorizontal: 20,
    marginBottom: 60,
  },
  btn: {
    padding: 20,
    backgroundColor: 'lightgreen',
    marginTop: 40,
  },
  signOut: {
    padding: 20,
    backgroundColor: 'teal',
    marginTop: 100,
    position: 'absolute',
  },
  show: {
    padding: 20,
    backgroundColor: 'orange',
    marginTop: 40,
  },
  delete: {
    padding: 20,
    backgroundColor: 'red',
    marginTop: 40,
  },
});
