import * as firebase from 'firebase';
import {initializeApp} from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCbeFvM-VgTuQIvX3gMCODZ3ZJVyfOyMUg',
  authDomain: 'onboarding-11a7a.firebaseapp.com',
  projectId: 'onboarding-11a7a',
  storageBucket: 'onboarding-11a7a.appspot.com',
  messagingSenderId: '759460488279',
  appId: '1:759460488279:web:5c6e2b16eefca0156baf12',
};

const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};
