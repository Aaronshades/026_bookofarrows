import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

/*const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId
};*/
const firebaseConfig = {
	apiKey: "AIzaSyC0G4XvgWjJwh5_WzRiQMqMGCCNlGQf_6Y",
	authDomain: "archer-aim-assist.firebaseapp.com",
	databaseURL: "https://archer-aim-assist-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "archer-aim-assist",
	storageBucket: "archer-aim-assist.appspot.com",
	messagingSenderId: "216984383462",
	appId: "1:216984383462:web:e3df4420aef1fce945b027"
};

export const firebaseApp = initializeApp(firebaseConfig, 'firebaseApp');
export const database = getFirestore(firebaseApp);
