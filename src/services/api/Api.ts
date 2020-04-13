import * as firebase from 'firebase/app';

import 'firebase/auth';
import { firebaseConfig } from './firebase';

class Api {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
  }

  public async signInUser(email: string, password: string): Promise<any> {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
  }

  public async signOutUser(): Promise<void> {
    await firebase.auth().signOut();
  }

  public async signUpUser(email: string, password: string): Promise<any> {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return user;
  }

  public async resetPassword(password: string): Promise<void> {
    const user = firebase.auth().currentUser;
    if (user) await user.updatePassword(password);
  }

  public async restore(email: string): Promise<any> {
    const response = await firebase.auth().sendPasswordResetEmail(email);
    return response;
  }
}

export { Api };
