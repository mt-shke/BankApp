import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AuthenticatedStack from './AuthenticatedStack';
import userJson from '../../tpData.json';
import {
  convertJsonUserData,
  setUserToFirebase,
  signOutWithoutCtx,
} from '../firebase';
import {timer} from '../utils';
import {UserContext} from '../state/UserContext';
import {deleteCollection} from '../firebase/collections';

const MainNavigation: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const {state: user, dispatch} = useContext(UserContext);

  function onAuthStateChanged(fetchedUser: any) {
    if (!fetchedUser) {
      dispatch({type: 'LOGOUT_USER'});
    }
    if (fetchedUser) {
      // console.log('In onAuthSta/fetchedUser', fetchedUser);
      dispatch({type: 'LOGIN_USER', payload: {user: fetchedUser}});
    }
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // const register = async () => {
  //   try {
  //     const createdUser = await auth().createUserWithEmailAndPassword(
  //       'qsd@qsd.com',
  //       'qsdqsd',
  //     );

  //     if (!createdUser) {
  //       console.log('Cannot create newUser');
  //       // throw new Error();
  //     }
  //     return createdUser;
  //   } catch (error: any) {

  //     if (error.code === 'auth/email-already-in-use') {
  //       console.log('That email address is already in use!');
  //       return null;
  //     }
  //     if (error.code === 'auth/invalid-email') {
  //       console.log('That email address is invalid!');
  //       return null;
  //     }
  //   }
  // };

  const login = async () => {
    try {
      const createdUser = await auth().signInWithEmailAndPassword(
        'mayer.franklin@mail.com',
        'mayer.franklin',
      );

      if (!createdUser) {
        console.log('Cannot create newUser');
        // throw new Error();
      }
      return createdUser;
    } catch (error: any) {
      console.log('inError');
      console.log(error);

      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        return null;
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        return null;
      }
    }
  };

  // const allUsers = userJson;
  // // const threeUsers = userJson.filter((user, index) => index < 2);

  // const registerAllUsers = async () => {
  //   for (let index = 0; index < allUsers.length; index++) {
  //     await registerUserToFb(allUsers[index]);
  //   }
  // };

  // const registerUserToFb = async user => {
  //   const resp = convertJsonUserData(user);
  //   const userStored = await setUserToFirebase(resp);
  //   if (!userStored) {
  //     return;
  //   }
  //   await signOutWithoutCtx();
  //   await timer(1);
  // };

  if (initializing) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return (
      <View>
        <Text>You are not authenticated</Text>
        <TouchableOpacity onPress={() => login()}>
          <View style={styles.btn}>
            <Text>Login as Franklin</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => register()}>
          <View style={styles.btn}>
            <Text>Register qsd</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => registerAllUsers()}>
          <View style={styles.btn}>
            <Text>Register All json users</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteCollection('Users')}>
          <View style={styles.btnDelete}>
            <Text>Delete all users DB</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  }

  return <AuthenticatedStack />;
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {},
  btn: {
    padding: 20,
    backgroundColor: 'lightgreen',
    marginTop: 40,
  },
  btnDelete: {
    padding: 20,
    backgroundColor: 'red',
    marginTop: 40,
  },
});
