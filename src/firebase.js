import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "video-sharing-ffad3.firebaseapp.com",
  projectId: "video-sharing-ffad3",
  storageBucket: "video-sharing-ffad3.appspot.com",
  messagingSenderId: "122907869458",
  appId: "1:122907869458:web:220611966001486acff3cb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
