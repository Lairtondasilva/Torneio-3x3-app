import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAw5ayuQUZWaKlGrGq0bR7lqiY-kR46x_s",
  authDomain: "torneio-3x3-app.firebaseapp.com",
  projectId: "torneio-3x3-app",
  storageBucket: "torneio-3x3-app.appspot.com",
  messagingSenderId: "661895576190",
  appId: "1:661895576190:web:1b49334f887712beb1f62f",
  measurementId: "G-CV7642F398"
};

const firebase = initializeApp(firebaseConfig);

const Storage = getStorage(firebase);

export {Storage, firebase}
