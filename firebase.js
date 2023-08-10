
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD5aAGszuvXPCssMrZFhDcJQ0CfpCPjrUI",
  authDomain: "reactnotes-b283c.firebaseapp.com",
  projectId: "reactnotes-b283c",
  storageBucket: "reactnotes-b283c.appspot.com",
  messagingSenderId: "799627624534",
  appId: "1:799627624534:web:ca7406e5f6bf7599113bf7",
  measurementId: "G-HV0MTWM4PC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");