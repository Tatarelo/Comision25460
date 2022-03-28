import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALWMgEcxiFeuuNyWFAwblFRSjmK6cAhbQ",
  authDomain: "proyecto-react-bd62b.firebaseapp.com",
  projectId: "proyecto-react-bd62b",
  storageBucket: "proyecto-react-bd62b.appspot.com",
  messagingSenderId: "244494879838",
  appId: "1:244494879838:web:a20445a6f950916c8f38cf"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
} 