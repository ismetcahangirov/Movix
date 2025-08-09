import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    reload,
} from "firebase/auth";
import { auth, googleProvider } from "./config";

export const registerUser = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName });
    await reload(user);

    return auth.currentUser;
};

export const loginUser = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await reload(userCredential.user);
    return auth.currentUser;
};

export const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
};

export const logoutUser = async () => {
    await signOut(auth);
};
