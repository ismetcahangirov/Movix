import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    reload,
} from "firebase/auth";
import { auth, googleProvider, db } from "./config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const registerUser = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName });
    await reload(user);

    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: displayName,
        email: user.email,
        createdAt: serverTimestamp(),
    });

    return auth.currentUser;
};

export const loginUser = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await reload(userCredential.user);
    return auth.currentUser;
};

export const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;
    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: user.displayName || "",
        email: user.email,
        createdAt: serverTimestamp(),
    }, { merge: true });

    return user;
};

export const logoutUser = async () => {
    await signOut(auth);
};
