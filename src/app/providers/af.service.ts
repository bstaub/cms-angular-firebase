import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import * as firebase from 'firebase/app';
import {User} from './user';
import {switchMap} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AfService {

  user$: Observable<User>;  // change to Interface User(import), and make observable with user$

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) {
    this.user$ = afAuth.authState.pipe(switchMap(user => {   // need pipe for switchMap in Angular6!
      if(user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);  // Angular6 without Observable.of, just of with import {of}
      }
    }));
  }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user);  // save this data to firebase with new function updateUser
    });
  }
  updateUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {  // push back to firebase
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        admin: false
      }
    }
    return userRef.set(data, {merge: true});
  }

  logout(){
    this.afAuth.auth.signOut();
  }


}
