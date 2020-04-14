import * as firebase from 'firebase/app';

import 'firebase/auth';


import { firebaseConfig } from './firebase';

class Api {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
  }

  public async signInUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public async signOutUser(): Promise<void> {
    await firebase.auth().signOut();
  }

  public async signUpUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public async resetPassword(password: string): Promise<void> {
    const user: firebase.User | null = firebase.auth().currentUser;
    if (user) await user.updatePassword(password);
  }

  public async restore(email: string): Promise<void> {
    await firebase.auth().sendPasswordResetEmail(email);
  }
}

export { Api };
