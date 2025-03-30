// Lazy load Firebase only when needed
let db, addDoc, collection;

export const initializeFirebase = async () => {
    const { initializeApp } = await import("firebase/app");
    const { getFirestore, addDoc: addDocFn, collection: collectionFn } = await import("firebase/firestore");

    const firebaseConfig = {
        // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        // appId: import.meta.env.VITE_FIREBASE_APP_ID,
        // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
        apiKey: "AIzaSyBLgXPel1z_DbxIZC8BL_cQg0hRzVq_jCU",
        authDomain: "healguid.firebaseapp.com",
        projectId: "healguid",
        storageBucket: "healguid.firebasestorage.app",
        messagingSenderId: "681690876015",
        appId: "1:681690876015:web:776515d99b8fdaa0ba659a",
        measurementId: "G-9447KTB9ZJ",
    };

    // Initialize Firebase only when needed
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    addDoc = addDocFn;
    collection = collectionFn;

    return { db, addDoc, collection };
};

export { db, addDoc, collection };
