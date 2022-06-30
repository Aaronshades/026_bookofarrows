import {getAuth} from "firebase/auth";
import firebaseApp from "./index";

export const logOut = () => {
	const auth = getAuth(firebaseApp);
	return auth.signOut();
}
