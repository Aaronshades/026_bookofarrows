import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "./index";

export const googleLogin = async () => {
	const auth = getAuth(firebaseApp);
	const googleAuthProvider = new GoogleAuthProvider();
	await signInWithPopup(auth, googleAuthProvider);
}
