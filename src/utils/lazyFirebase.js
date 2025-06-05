// utils/staticFirebase.js
let firebasePromise;

export const getFirebase = () => {
    if (!firebasePromise) {
        firebasePromise = loadFirebase();
    }
    return firebasePromise;
};

const loadFirebase = async () => {
    // Only load when actually needed
    const [{ initializeApp }, { getFirestore }, { addDoc }, { collection }] = await Promise.all([
        import("firebase/app"),
        import("firebase/firestore/lite"),
        import("firebase/firestore/lite"),
        import("firebase/firestore/lite"),
    ]);

    const firebaseConfig = {
        apiKey: "AIzaSyBLgXPel1z_DbxIZC8BL_cQg0hRzVq_jCU",
        authDomain: "healguid.firebaseapp.com",
        projectId: "healguid",
        storageBucket: "healguid.firebasestorage.app",
        messagingSenderId: "681690876015",
        appId: "1:681690876015:web:776515d99b8fdaa0ba659a",
        measurementId: "G-9447KTB9ZJ",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return { db, addDoc, collection };
};

export const submitToFirestore = async (collectionName, data) => {
    const { db, addDoc, collection } = await getFirebase();
    return addDoc(collection(db, collectionName), data);
};
