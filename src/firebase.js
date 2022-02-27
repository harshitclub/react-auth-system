import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPkGSiMH4WMhpzUKKRhH42z1wqJjb-Prw",
  authDomain: "auth-system-40f0d.firebaseapp.com",
  projectId: "auth-system-40f0d",
  storageBucket: "auth-system-40f0d.appspot.com",
  messagingSenderId: "37120326468",
  appId: "1:37120326468:web:b47ca44f56d0413cebf511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;