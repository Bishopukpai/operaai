// firebase/config.ts

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

if (process.env.NODE_ENV === "development") {
  Object.entries(firebaseConfig).forEach(([key, value]) => {
    // ✅ Check for missing or empty values
    if (!value?.trim()) {
      throw new Error(
        `Missing Firebase environment variable for "${key}". Check your .env.local file.`
      );
    }
  });
}