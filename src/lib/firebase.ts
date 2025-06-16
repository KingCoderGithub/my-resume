// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhbP0spNvB8ey766v93PEn9quUeM7V--k",
  authDomain: "my-resume-12055.firebaseapp.com",
  projectId: "my-resume-12055",
  storageBucket: "my-resume-12055.firebasestorage.app",
  messagingSenderId: "972531934621",
  appId: "1:972531934621:web:d5d5bdf3c5abae6d733b74",
  measurementId: "G-6KNBPB4XE2"
};

// Initialize Firebase for client-side
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

let analytics: Analytics | undefined;

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics, firebaseConfig };
