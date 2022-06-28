import { initializeApp } from "firebase/app";

//firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8B1cLso33oZKm-7MORKIbv-hS1fq9PDA",
  authDomain: "quiz-dev-a99a6.firebaseapp.com",
  projectId: "quiz-dev-a99a6",
  storageBucket: "quiz-dev-a99a6.appspot.com",
  messagingSenderId: "882365428578",
  appId: "1:882365428578:web:5ce4614edf45efd5baf23b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// });

// export default app;
