import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC_9plk5R_UESrfAN2jkuc5qp8aVZpDczc",
  authDomain: "authecommerce-ee645.firebaseapp.com",
  projectId: "authecommerce-ee645",
  storageBucket: "authecommerce-ee645.appspot.com",
  messagingSenderId: "538334279722",
  appId: "1:538334279722:web:b4a04556842ed92d67ab53",
  measurementId: "G-ZY95289PML"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
const analytics = getAnalytics(app);