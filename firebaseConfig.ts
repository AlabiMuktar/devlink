import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }