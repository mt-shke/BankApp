import auth from '@react-native-firebase/auth';
import {incomeSchema} from '../schema/yup/payment';
import {setNewCollection} from './collections';
// import {TUserAction} from '../state/UserContext';
// import {ICredentials} from '../ts/interfaces';
// import {TSetStringFunction} from '../ts/types';
export * from './jsonData';

export const setUserToFirebase = async (user: any) => {
  try {
    const [lastname, firstname] = user.user.split(' ');

    const name = user.user.replace(' ', '.').toLowerCase();
    const email = name + '@mail.com';
    const password = name;
    console.log('in before creating new user');

    const userCreated = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    if (!userCreated) {
      // throw new Error(email);
      console.log('in !userCreated');
    }
    console.log('in after creating new user');

    const updatedIncomes = user.incomes.map((inc, index) => ({
      ...inc,
      _id_income: index,
    }));
    const updatedExpenses = user.expenses.map((inc, index) => ({
      ...inc,
      _id_expense: index,
    }));

    const data = {
      firstname: firstname,
      lastname: lastname,
      // incomes: [1, 2, 445, 54],
      incomes: updatedIncomes,
      // expenses: [{test: 'ok', Dded: 'Oked', num: 23}],
      expenses: updatedExpenses,
    };
    // console.log('in before settings new data');

    const userDataStored = await setNewCollection('Users', data);

    if (!userDataStored) {
      return null;
    }

    return userDataStored;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('That email address is already in use!');
      return null;
    }
    if (error.code === 'auth/invalid-email') {
      console.error('That email address is invalid!');
      return null;
    }
  }
};

// USER Signup - Login - Sign out
export const createNewAuthUser = async (
  user: ICredentials,
  setErrMsg: TSetStringFunction,
) => {
  try {
    const createdUser = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    if (!createdUser) {
      console.log('Cannot create newUser');
      // throw new Error();
    }
    return createdUser;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      setErrMsg('That email address is already in use!');
      return null;
    }
    if (error.code === 'auth/invalid-email') {
      setErrMsg('That email address is invalid!');
      return null;
    }
  }
};

export const signIn = async (
  data: ICredentials,
  setEmailError?: TSetStringFunction,
  setOldPasswordError?: TSetStringFunction,
) => {
  try {
    const user = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    return user;
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      setEmailError && setEmailError('Email is invalid');
    }
    if (error.code === 'auth/wrong-password') {
      setOldPasswordError && setOldPasswordError('Password is not correct');
    }
    if (error.code === 'auth/network-request-failed') {
      console.log('Connection error');
    }
    return null;
  }
};

export const signOut = async (
  dispatchCtx: (TUserAction: TUserAction) => void,
) => {
  auth()
    .signOut()
    .then(() => {
      console.log('User signed out!');
      dispatchCtx({type: 'LOGOUT_USER'});
    });
};

export const signOutWithoutCtx = async () => {
  auth()
    .signOut()
    .then(() => {
      console.log('User signed out!');
    });
};

// Others Auth Method

export const deleteAccount = async () => {
  try {
    const response = await auth().currentUser?.delete();
    console.log('in updatePassword fn:', response);
    if (!response) {
      return null;
    }
    return response;
  } catch (error) {
    console.error('Error In Firebase/Auth/DelAccFn', error);
    return null;
  }
};

export const updatePassword = async (newPassword: string) => {
  try {
    const response = await auth().currentUser?.updatePassword(newPassword);
    console.log('in updatePassword fn:', response);
    if (response) {
      return {success: true};
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const showCurrentUser = () => {
  const currentUser = auth().currentUser;
  console.log(currentUser);
};
