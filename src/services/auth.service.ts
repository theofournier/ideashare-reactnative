import auth from '@react-native-firebase/auth';
import userMock from '../mocks/user.json';
import { User } from '../shared/models';

const signInWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const firebaseUser = await auth().signInWithEmailAndPassword(email, password);

  if (!firebaseUser) {
    throw new Error();
  }

  //TODO: get user from db
  await new Promise(resolve => setTimeout(resolve, 500));
  const user = userMock;
  return user;
};

const createUserWithEmailAndPassword = async ({
  firstname,
  lastname,
  email,
  password,
}: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}): Promise<User> => {
  const firebaseUser = await auth().createUserWithEmailAndPassword(
    email,
    password,
  );

  if (!firebaseUser) {
    throw new Error();
  }

  //TODO: create user in db
  const newUser: User = {
    id: firebaseUser.user.uid,
    info: {
      firstname,
      lastname,
      email,
      photoUrl: firebaseUser.user.photoURL,
    },
  };
  console.log(newUser);
  await new Promise(resolve => setTimeout(resolve, 500));
  const user = userMock;
  return user;
};

const signOut = async () => {
  await auth().signOut();
};

export const authService = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
