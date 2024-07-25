import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcjP74C7nlgvTnlE6Qdl1iPeplBnP7eCk",
  authDomain: "ecommerce-images-46f37.firebaseapp.com",
  projectId: "ecommerce-images-46f37",
  storageBucket: "ecommerce-images-46f37.appspot.com",
  messagingSenderId: "750466191553",
  appId: "1:750466191553:web:45bae8fda7eae1e6fcc440",
  measurementId: "G-DJ05MC7Y95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
