import { initializeApp, getApps } from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDP7j7FTncC7YKuAoMQCd6uJcykcBS6UUE",
  authDomain: "workshop-24-8a999.firebaseapp.com",
  projectId: "workshop-24-8a999",
};

function getFirebaseApp() {
  const apps = getApps();

  if (apps.length > 0) {
    return apps[0];
  }

  return initializeApp(FIREBASE_CONFIG);
}

export const firebaseApp = getFirebaseApp();