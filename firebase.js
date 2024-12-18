// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDN-Gf3pbQr47aWPejE---O6N_RPMHQkGk',
	authDomain: 'rr-finvests.firebaseapp.com',
	projectId: 'rr-finvests',
	storageBucket: 'rr-finvests.appspot.com',
	messagingSenderId: '210716546688',
	appId: '1:210716546688:web:7301859db24a00960ef865',
	measurementId: 'G-M985LR7ZPX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
