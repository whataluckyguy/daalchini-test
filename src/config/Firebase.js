import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBm2hg9EAG2z_0kDhV5yQ-NWvwSGNwv0pE",
  authDomain: "daalchini-test.firebaseapp.com",
  projectId: "daalchini-test",
  storageBucket: "daalchini-test.appspot.com",
  messagingSenderId: "859752074559",
  appId: "1:859752074559:web:307763a62ddc248747578a",
  measurementId: "G-26HE367VY6",
};

const app = initializeApp(config);
export const authentication = getAuth(app);
